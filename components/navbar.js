"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { id: 1, link: "/", name: "HOME" },
  { id: 2, link: "/porfolio", name: "PORTFOLIOS" },
  { id: 3, link: "/detail", name: "SERVICES" },
  { id: 5, link: "/contact", name: "CONTACT US" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black text-sm w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold">XXXX TECH</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-200 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-x-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className=" hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col items-end space-y-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
