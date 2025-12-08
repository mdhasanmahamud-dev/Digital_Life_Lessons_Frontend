import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-r from-indigo-900 via-gray-900 to-indigo-900 text-gray-300 py-12 shadow-inner"
    >
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Website Name */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-indigo-400 mb-3">
            Digital Life Lessons
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-400 font-playfair">
            A platform to store, learn and share meaningful life experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg text-white mb-3">Contact</h2>
          <ul className="space-y-1 font-playfair">
            <li>
              Email:{" "}
              <a
                href="mailto:support@digitallifelessons.com"
                className="hover:text-indigo-400 transition-colors"
              >
                support@digitallifelessons.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+880123456789"
                className="hover:text-indigo-400 transition-colors"
              >
                +880 123 456 789
              </a>
            </li>
            <li>Dhaka, Bangladesh</li>
          </ul>

          {/* Terms */}
          <div className="mt-4">
            <a
              href="/terms"
              className="hover:text-indigo-400 transition-colors block"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="hover:text-indigo-400 transition-colors block"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h2 className="font-semibold text-lg text-white mb-3">Follow Us</h2>
          <div className="flex space-x-3">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm md:text-base">
        <p className="font-playfair">
          &copy; {new Date().getFullYear()} Digital Life Lessons. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
