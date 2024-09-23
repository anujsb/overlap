import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div
      id="Contact"
      className="h-auto my-20 flex flex-col items-center justify-center w-full"
    >
      <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
        <Image
          src="/talk-black.svg"
          width={15}
          height={15}
          alt="versatile icon"
          className="mr-1"
        />
        <div>Contact Us</div>
      </div>
      <h1 className="my-6 text-2xl lg:text-4xl">We&apos;re Here to Help</h1>
      <div className="mt-10">
        <div className="border rounded-xl p-8 flex flex-col">
          <h1 className="text-xl">Send Us a Message</h1>
          <p className="mt-2 text-dark-grey font-light">
            Use our convenient contact form to reach out with questions,
            feedback, or collaboration inquiries.
          </p>
          <form className="flex flex-col mt-4 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-[#f8f9fa] p-2 rounded-xl flex-grow"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#f8f9fa] p-2 rounded-xl flex-grow"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="bg-[#f8f9fa] p-2 rounded-xl"
              rows={4}
            />
            <Button className="p-2 rounded-xl">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
