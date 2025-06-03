import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { LuPhoneCall } from "react-icons/lu";

const currentYear = new Date().getFullYear();
const footerData = [
  {
    id: 1,
    title: 'Services',
    options: ['Video Editing', 'Graphics Design', 'Social Media Managment', "Consultancy"],
  },
  {
    id: 2,
    title: 'About',
    options: ['Portfolio', 'Projects', 'About', "Testimonal"],
  },
  {
    id: 3,
    title: 'Address',
    options: ["Addis Ababa, Ethiopia",'0911111111 ', '0999999999',],
  },
];

function Footer() {


  return (
    <footer className='bottom-0 left-0 w-full bg-black z-50 md:px-32 px-14 py-12'>
      <div className='container grid md:grid-cols-3 grid-cols-1 text-white '>
        <div>
          <h1 className='md:text-3xl font-bold text-white'>IKIM Tech Co.</h1>
        </div>
        <div>Copyright © {currentYear} IKIM Tech Co.</div>
        <div className='flex md:justify-center gap-4 text-white'>
          <a href="https://www.facebook.com"><FaFacebookSquare size={20} /></a>
          <a href="https://www.twitter.com"><FaXTwitter size={20} /></a>
          <a href="https://www.tiktok.com"><FaTiktok size={20} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
        </div>
      </div>
      <div className=''>
        <hr className='border-gray-400 mb-8 mt-4' />
      </div>
      {/* <div className='grid md:grid-cols-4 grid-cols-1 md:mx-8 mx-20 text-white justify-center'>
        {footerData.map((item) => (
          <div key={item.id}>
            <h1 className='font-semibold text-3xl'>{item.title}</h1>
            {item.options.map((option, index) => (
              <h3 key={index} className='text-gray-300 py-3 pt-3 text-xl'>
                {option}
              </h3>
            ))}
          </div>
        ))}
      </div> */}
      <div className='grid md:grid-cols-3 grid-cols-1 md:mx-8 mx-10 text-white justify-center'>
        <div>
          <h1 className='font-semibold text-3xl md:mt-0 mt-3'>Services</h1>
          <div className='grid grid-rows-4 md:pt-5'>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Video Editing</div>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Graphics Design</div>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Social Media Managment</div>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Consultancy</div>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Consultancy</div>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-3xl md:mt-0 mt-3'>About</h1>
          <div className='grid grid-rows-4 text-gray-300 py-3 md:pt-5 text-xl'>
            <Link href={"/"} className='text-gray-300 py-3 pt-3 text-xl'>Portfolio </Link>
            <Link href={"/"} className='text-gray-300 py-3 pt-3 text-xl'>About </Link>
            <Link href={"/"} className='text-gray-300 py-3 pt-3 text-xl'>Projects </Link>
            <Link href={"/"} className='text-gray-300 py-3 pt-3 text-xl'>Services</Link>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-3xl md:mt-0 mt-3'>Address</h1>
          <div className='grid grid-rows-4 text-gray-300 py-3 md:pt-5 text-xl'>
            <div className='text-gray-300 py-3 pt-3 text-xl'>Addis Ababa, Ethiopia</div>
            <div className='text-gray-300 py-3 pt-3 text-xl flex space-x-3'>
              <LuPhoneCall size={30} className="pt-1"/>  0919208746
            </div>
            <div className='text-gray-300 py-3 pt-3 text-xl flex space-x-3'>
              <LuPhoneCall size={30} className="pt-1"/> 0955327885 
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
