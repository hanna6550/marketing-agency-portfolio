'use client';
import { useState } from 'react';
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Title from "@/components/sectionTitles"

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleBlur = (fieldName) => {
    // Clear the error message associated with the field on blur
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      console.log(subject, email, name, message);
      // If no errors, you can proceed with form submission
    } else {
      setErrors(errors);
    }
  };

  return (
    <div id='contact' className='scroll-mt-28'>
      <Title  title={'Contact Us'} className="mt-5" />
    <div className='bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen w-full'>
      <div className='backdrop-filter backdrop-blur-xl'>
        <div className='w-full max-w-7xl md:p-8 p-16 rounded-lg shadow-lg border'>
          <div className='relative'>
            <h1 className='text-4xl text-center text-black font-bold mb-8 pb-2'>
              Contact Us
            </h1>
            <div className='absolute w-14 h-1 bg-orange-500 bottom-0 left-1/2 transform -translate-x-1/2 ml-1'></div>
          </div>
          <form onSubmit={handleSubmit} className='md:px-20'>
            <div className='mb-4 md:flex gap-2'>
              <div className='w-full md:w-1/2'>
                {' '}
                {/* Set input field width to full for small screens */}
                <input
                  className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-black focus:outline-none mb-4 md:mb-0 ${
                    errors.name && 'border-red-500'
                  }`}
                  type='text'
                  placeholder='Name'
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur('name')}
                />
                {errors.name && (
                  <p className='text-red-500 text-sm'>{errors.name}</p>
                )}
              </div>
              <div className='w-full md:w-1/2'>
                {' '}
                {/* Set input field width to full for small screens */}
                <input
                  className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-black focus:outline-none ${
                    errors.email && 'border-red-500'
                  }`}
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <input
                className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-black focus:outline-none ${
                  errors.subject && 'border-red-500'
                }`}
                type='text'
                placeholder='Subject'
                name='subject'
                onChange={(e) => setSubject(e.target.value)}
                onBlur={() => handleBlur('subject')}
              />
              {errors.subject && (
                <p className='text-red-500 text-sm'>{errors.subject}</p>
              )}
            </div>
            <div className='mb-4'>
              <textarea
                className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-black focus:outline-none ${
                  errors.message && 'border-red-500'
                }`}
                rows='5'
                placeholder='Message'
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => handleBlur('message')}
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message}</p>
              )}
            </div>
            <div className='text-center bg-black w-1/3'>
              <button className='px-0 py-1 text-white mx-auto' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 md:mt-10 mt-24 md:mx-60 mx-1 '>
          <div className=''>
            <h1 className='md:ml-10 ml-6 md:text-2xl text-lg font-semibold md:pb-6 pb-4'>COME VISIT US </h1>
            <div className='ml-10'>
              <h1 className=''>ADDIS ABABA, ETHIOPIA</h1>
              <div className='flex justify-center h-1 md:w-14 w-8 bg-gray-400 md:my-5 my-3'></div>
              <h1>(+251) 99999999</h1>
              <h1>(+251) 900000000</h1>
            </div>
          </div>
          <div className='md:ml-20'> 
           <h1 className='  md:text-2xl text-lg font-semibold md:pb-6 pb-4'>FOLLOW OUR SOCIALS </h1>
           <div className="flex md:gap-5 gap-3 md:pl-16">
            <a href="https://www.facebook.com"> <FaFacebookF size={25} /> </a>
            <a href="https://t.me/"> <FaTelegram size={25} /> </a>
            <a href="https://www.instagram.com"> <FaInstagram size={25}/> </a>
            <a href="https://www.tiktok.com/"> <FaTiktok size={25} /> </a>
          </div>
          </div>
        </div>
  </div>

  );
};

export default ContactUs;

