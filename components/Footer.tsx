import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-br text-[#8c8d8e] from-[#191919] to-stone-800 mt-10 w-full text-neutral-content ">
      <div className="p-10 flex items-center justify-between">
        <aside>
          <div className="text-center lg:text-left">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="EACC.dev logo"
              className="rounded-xl mx-auto lg:mx-0"
            />
            <p className="mt-5 font-light">
            Overlap is an AI-powered podcast assistant. Ask it about any topic or person, <br/> and it’ll give you a custom podcast playlist of clips relevant <br/> to what you asked for. It is a breakthrough way to listen to podcasts.
            </p>
            <div className="flex justify-center lg:justify-start mt-5 space-x-2">
              <Link href="https://www.linkedin.com/in/anujbhuyar/">
                <div className="p-2 bg-dark-grey-bg rounded-lg">
                  <Image
                    src="/linkedin.svg"
                    width={25}
                    height={25}
                    alt="LinkedIn"
                  />
                </div>
              </Link>
              <Link href="https://x.com/anujsbhuyar">
                <div className="p-2 bg-dark-grey-bg rounded-lg">
                  <Image src="/x.svg" width={25} height={25} alt="X" />
                </div>
              </Link>
              {/* <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </div>
            </Link> */}
            </div>
          </div>
        </aside>
        <div className="flex flex-col  justify-start items-start">
          <a href="#">
            <Button variant="link" className="text-[#8c8d8e]">
              Home
            </Button>
          </a>
          <a href="/#video">
            <Button variant="link" className="text-[#8c8d8e]">
              About
            </Button>
          </a>
          <a href="#features">
            <Button variant="link" className="text-[#8c8d8e]">
              Features
            </Button>
          </a>
          <a href="#Testimonials">
            <Button variant="link" className="text-[#8c8d8e]">
              Testimonials
            </Button>
          </a>
          <a href="#Contact">
            <Button variant="link" className="text-[#8c8d8e]">
              Contact
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t border-[#656d76] pt-4 mt-4 space-y-4 lg:space-y-0">
        <p>© 2024 anuj. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/privacy-policy">
            <Button variant="link" className="text-[#8c8d8e]">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/tos">
            <Button variant="link" className="text-[#8c8d8e]">
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
