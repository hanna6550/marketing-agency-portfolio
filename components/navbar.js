"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import clsx from "clsx";

const links = [
  { id: 1, link: "/", name: "HOME" },
  { id: 2, link: "#service", name: "SERVICES" },
  { id: 3, link: "#portfolio", name: "PORTFOLIOS" },
  { id: 4, link: "#contact", name: "CONTACT US" },
];


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  return (
    <nav className="fixed w-full bg-white text-black text-sm shadow-md z-50 mb-0 md:py-1">
      <div className="flex justify-between items-center px-6 md:px-16 py-3">
        {/* Logo */}
        <Link href='/' className="text-3xl font-bold text-orange-900">IKIM Tech Co.</Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
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

        {/* Desktop Menu */}
        <div  className="hidden md:flex gap-x-10 text-lg "> 
          {links.map((link) => (
            <Link className={ clsx ("hover:text-orange-900 bg- transition duration-200", {"text-orange-900":activeSection===link.name})}
              key={link.id}
              href={link.link}
              
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>


        <div className='hidden md:flex gap-4 items-center'>
          <a href='#'>
            <FaFacebook
              size={20}
              className='text-orange-900'
            />
          </a>
          <a href='#'>
            <FaXTwitter
              size={20}
              className='text-orange-900'
            />
          </a>
          <a href='#'>
            <FaTiktok
              size={20}
              className='text-orange-900'
            />
          </a>
          <a href='#'>
            <FaInstagram
              size={20}
              className='text-orange-900'
            />
          </a>
        </div>
      </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-3 text-right">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="hover:text-blue-600 transition duration-150"
                onClick={() => setIsOpen(false)}
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
