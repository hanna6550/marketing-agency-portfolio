import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-black z-50 md:px-32 px-14 py-12'>
      <div className='container grid md:grid-cols-3 grid-cols-1 text-white '>
        <div>
          <h1 className='text-3xl font-bold text-white'>XXXX TECH</h1>
        </div>
        <div>Copyright © {currentYear} XXXX TECH.</div>
        <div className='flex justify-center md:justify-end gap-4'>
          <a href="https://www.facebook.com"><FaFacebookSquare size={20} /></a>
          <a href="https://www.twitter.com"><FaXTwitter size={20} /></a>
          <a href="https://www.tiktok.com"><FaTiktok size={20} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
        </div>
      </div>
      <div className='pt-'>
        <hr className='border-gray-400' />
      </div>
    </footer>
  );
}

export default Footer;
