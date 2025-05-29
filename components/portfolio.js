"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Img1 from "@/public/images/graphics.jpg"
import Img2 from "@/public/images/video1.jpg"
import Img3 from "@/public/images/web.jpg"
import Img4 from "@/public/images/tech2.jpg"
import Title from "@/components/sectionTitles"

const data = [
  {
    id: 1,
    title: 'Graphics Design',
    desc: 'Graphics Design Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus turpis nec dolor posuere vestibulum non id est. Phasellus ut urna quis elit blandit semper sed in justo. Sed viverra mi risus, sit amet elementum massa interdum et.',
    imgSrc: Img1,
  },
  {
    id: 2,
    title: 'Video Editing',
    desc: 'Video Editing Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus turpis nec dolor posuere vestibulum non id est. ',
    imgSrc: Img2,
  },
  {
    id: 3,
    title: 'Website and Mobile Application',
    desc: 'Website and Mobile Application Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: Img3,
  },
  {
    id: 4,
    title: 'Social Media Marketing',
    desc: 'Social Media Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus turpis nec dolor posuere vestibulum non id est. Phasellus ut urna quis elit blandit semper sed in justo. Sed viverra mi risus, sit amet elementum massa interdum et.',
    imgSrc: Img4,
  },
];

function Portfolio() {
  return (
    
    <div id="portfolio" className="scroll-mt-28">
      <Title title="Portfolio" className="mt-6" />

      <div className="flex flex-col gap-2 max-w-screen-lg mx-auto p-10">
        <div>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 md:h-[22rem]`}
          >
            <div className="md:w-1/2">
              <Image
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="mb-6">{item.desc}</p>
              <button className="px-8 py-2 text-base font-semibold border border-gray-600 text-black">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Portfolio;