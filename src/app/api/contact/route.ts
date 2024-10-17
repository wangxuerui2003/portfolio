import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

// Set up an in-memory cache for rate limiting (can use Redis for distributed environments)
const rateLimitCache = new LRUCache({
	max: 500, // Max 500 unique IPs
	ttl: 60 * 1000, // Cache each IP for 1 minute
});

const rateLimit = (ip: string, limit: number, windowMs: number = 60 * 1000) => {
	const current: any = rateLimitCache.get(ip) || { count: 0, time: Date.now() };
	const timeDiff = Date.now() - current.time;

	if (timeDiff > windowMs) {
		rateLimitCache.set(ip, { count: 1, time: Date.now() });
		return true; // Allow
	}

	if (current.count < limit) {
		rateLimitCache.set(ip, { count: current.count + 1, time: current.time });
		return true; // Allow
	}

	return false; // Block
};

export async function POST(request: Request) {
	// const ip = request.headers.get("x-forwarded-for") || "localhost"; // Get client IP (can use proxies in production)

	// // Apply rate limiting, allow max 5 requests per minute
	// if (!rateLimit(ip, 5)) {
	// 	return NextResponse.json({ message: "Too many requests" }, { status: 429 });
	// }

	const { name, email, message } = await request.json();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: process.env.GMAIL_USER,
			subject: `New contact form submission from ${name}`,
			html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Error sending email" },
			{ status: 500 }
		);
	}
}
