import React from 'react'
import Laptop from '../assets/laptop.jpg'

const analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl p-2 font-bold'>Manage Data Analytics Centrally</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Autem molestiae quasi dicta ea corrupti, vitae inventore neque tenetur ab, quaerat, 
                 totam possimus cumque illum minus aut velit perferendis quisquam ullam.</p>
                 <button  className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default analytics