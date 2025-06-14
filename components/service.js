import React from 'react'
import Image from 'next/image'
import graphics from "@/public/images/graphics.jpg"
import web from "@/public/images/web.jpg"
import video from "@/public/images/video1.jpg"
import tech2 from "@/public/images/tech2.jpg"
import social from "@/public/images/socialmedia.jpg"
import Title from "@/components/sectionTitles"

function service() {

  const data = [
  {
    id: '1',
    title: 'Graphics Design',
    // heading: 'Who is Haile Gebresilassie?',
    description:
      'Graphics Design is considered one of the greatest consectetur adipiscing elit. Mauris placerat augue et massa sagittis dictum. Integer egestas velit at rhoncus imperdiet. Maecenas ut convallis risus, id suscipit nibh.',
    imageSrc: graphics,
  },{
    id: '2',
    title: '3D Design',
    // heading: 'Ethiopian Music Industry',
    description:
      "Editing video music has enjoyed a rich tradition of producing some of the world. consectetur adipiscing elit. Mauris placerat augue et massa sagittis dictum. Integer egestas velit at rhoncus imperdiet. Maecenas ut convallis risus, id suscipit nibh.",
    imageSrc: tech2,
  },
  
  {
    id: '3',
    title: 'Video Editing',
    // heading: 'Ethiopian Music Industry',
    description:
      "Editing video music has enjoyed a rich tradition of producing some of the world. consectetur adipiscing elit. Mauris placerat augue et massa sagittis dictum. Integer egestas velit at rhoncus imperdiet. Maecenas ut convallis risus, id suscipit nibh.",
    imageSrc: video,
  },
  {
    id: '4',
    title: 'Website and Mobile App development',
    // heading: 'Ethiopian Athletics',
    description:
      "Website and Mobile App development has consectetur adipiscing elit. Mauris placerat augue et massa sagittis dictum. Integer egestas velit at rhoncus imperdiet. Maecenas ut convallis risus, id suscipit nibh.",
    imageSrc: web,
  },
  {
    id: '5',
    title: 'Social Media ',
    // heading: 'Ethiopian Athletics',
    description:
      "Website and Mobile App development has consectetur adipiscing elit. Mauris placerat augue et massa sagittis dictum. Integer egestas velit at rhoncus imperdiet. Maecenas ut convallis risus, id suscipit nibh.",
    imageSrc: social,
  },
];

  return (
     <div className='scroll-mt-28' id='service'>
        {/* <h1 className='text-center text-lg font-semibold'>RECENT BLOGS</h1>
        <h1 className='text-center text-2xl font-semibold mb-5'>
          Check out the blogs you might have missed
        </h1>
        <h1 className='h-1 md:w-28 w-10 bg-orange-500 md:mt-6 mt-2 mx-auto my-auto'></h1> */}
        <Title  title={'Service'} className="" />
        <div className='flex flex-wrap justify-center items-center gap-10 '>
          {data.map((item) => (
            <div
              key={item.id}
              className='block max-w-[18rem] text-surface shadow-secondary-1 m-4 '
            >
              <div className='relative overflow-hidden bg-cover bg-no-repeat'>
                <Image className='mb-7' src={item.imageSrc} alt='the image' />
              </div>
              <div>
                <h1 className='mb-7 text-xl font-bold '>{item.title}</h1>
              </div>
              <div className='mb-7'>
                <p className='text-base'>{item.description}</p>
              </div>
              <div className='bg-black text-center py-4'>
                <a href='#' className='text-white text-2xl py-2'>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> 
  )
}

export default service