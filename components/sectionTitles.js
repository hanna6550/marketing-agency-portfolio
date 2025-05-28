import React from 'react'

const sectionTitle = ( {title} ) => {
  return (
    <div className="md:mt-18 mt-9 md:mb-14 mb-7">
      <h1 className="text-center md:font-bold font-medium md:text-5xl text-2xl">{title}</h1>{' '}
      <div className='h-1 md:w-14 w-10 bg-orange-900 md:mt-4 mt-2 mx-auto my-auto'></div>
    </div>
  )
}

export default sectionTitle