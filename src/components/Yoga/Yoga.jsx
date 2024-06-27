import React from 'react'

import yogaImg1 from '../../assets/yogaImg/01.jpg';
import yogaImg2 from '../../assets/yogaImg/02.jpg';
import yogaImg3 from '../../assets/yogaImg/03.jpg';
import yogaImg4 from '../../assets/yogaImg/04.jpg';
import yogaImg5 from '../../assets/yogaImg/05.jpg';
import yogaImg6 from '../../assets/yogaImg/06.jpg';
import yogaImg7 from '../../assets/yogaImg/07.jpg';
import yogaImg8 from '../../assets/yogaImg/08.jpg';
const Yoga = () => {
  const Yoga = [yogaImg1,yogaImg2,yogaImg3,yogaImg4,yogaImg5,yogaImg6,yogaImg7,yogaImg8];

  return (
    <div className='mt-10'>
        <h2 className='text-2xl font-bold mb-5'>Eat Sleep Yoga Repeat</h2>
   <div className='overflow-scroll'>
    <div className='flex gap-1'>
      {Yoga.map((image, index)=> <img src={image} key={index} className='h-52 w-48'/>)}
    </div>
    </div>
    </div>
  )
}

export default Yoga
