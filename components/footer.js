import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';

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
          <h1 className='text-3xl font-bold text-white'>IKIM Tech Co.</h1>
        </div>
        <div>Copyright © {currentYear} IKIM Tech Co.</div>
        <div className='flex justify-center gap-4 text-white'>
          <a href="https://www.facebook.com"><FaFacebookSquare size={20} /></a>
          <a href="https://www.twitter.com"><FaXTwitter size={20} /></a>
          <a href="https://www.tiktok.com"><FaTiktok size={20} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
        </div>
      </div>
      <div className=''>
        <hr className='border-gray-400 my-8' />
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 md:mx-8 mx-20 text-white justify-center'>
        {footerData.map((item) => (
          <div key={item.id}>
            <h1 className='font-bold text-2xl'>{item.title}</h1>
            {item.options.map((option, index) => (
              <h3 key={index} className='text-gray-300 py-3 pt-3'>
                {option}
              </h3>
            ))}
          </div>
        ))}
      </div>

    </footer>
  );
}

export default Footer;
