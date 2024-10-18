"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export default function ContactMe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      form.reset();

      toast({
        title: "Email Sent!",
        description: "Thank you for contacting me, I'll get back to you soon.",
        variant: "success",
      });
    } catch (error) {
      console.error("Error submitting contact me form	:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending the email.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  }

  return (
    <section
      id="contact-me"
      className="w-full h-auto px-6 lg:px-24 bg-background2 flex flex-col justify-start items-center flex-grow gap-6 pb-12"
    >
      <div className="flex mt-12 lg:mt-24 items-center gap-4">
        <h1 className="font-bold text-4xl lg:text-6xl">Contact Me</h1>
        <Image src="/icons/contact.png" width={64} height={64} alt="Projects" />
      </div>
      <div className="mx-auto w-full md:w-3/4 bg-card p-6 lg:p-12 rounded-md lg:rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Name"
                      {...field}
                      className="h-12 px-4 py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      {...field}
                      className="h-12 px-4 py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Your Message"
                      {...field}
                      className="h-48 px-4 py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full h-12 text-lg lg:text-xl hover:bg-primary-hover"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
