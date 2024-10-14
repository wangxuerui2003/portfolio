import Image from 'next/image';

export default function Home() {
	return (
		<Image
			src="/images/profile-picture.jpg"
			alt="Profile Picture"
			width={240}
			height={240}
		/>
	);
}
