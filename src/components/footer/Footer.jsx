import React from "react";
import Logo from "../../assets/Footer Logo.png";
import { Link } from "react-router";
import { format } from "date-fns";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="relative mt-16 bg-primary">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a href="/" className="inline-flex items-center">
                <img className="h-16" src={Logo} alt="iventiq" />
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  Never miss out on what's happening at your campus.
                </p>
                <p className="mt-4 text-sm text-deep-purple-50">
                  We are dedicated to making your campus life more enjoyable, so
                  you can cherish every moment without ever thinking, "I wish I
                  hadn’t missed that event during my university days."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2">
              <div className="lg:justify-self-end">
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/my-profile"}>My Profile</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="lg:justify-self-end">
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Legal
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/terms"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © {format(new Date(), "yyyy")} Iventiq. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
              target="_blank"
                href="https://www.facebook.com/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
              target="_blank"
                href="https://www.instagram.com/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
              target="_blank"
                href="https://x.com/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
