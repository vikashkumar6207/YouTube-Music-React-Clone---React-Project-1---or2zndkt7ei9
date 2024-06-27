import React from 'react'
// Multiverse
import Multiverse1 from '../../assets/MultiverseImg/Multiverse1.jpg'
import Multiverse2 from '../../assets/MultiverseImg/Multiverse2.jpg'
import Multiverse3 from '../../assets/MultiverseImg/Multiverse3.jpg'
import Multiverse4 from '../../assets/MultiverseImg/Multiverse4.jpg'
import Multiverse5 from '../../assets/MultiverseImg/Multiverse5.jpg'
import Multiverse6 from '../../assets/MultiverseImg/Multiverse6.jpg'
import Multiverse7 from '../../assets/MultiverseImg/Multiverse7.jpg'
import Multiverse8 from '../../assets/MultiverseImg/Multiverse8.jpg'
import Multiverse9 from '../../assets/MultiverseImg/Multiverse9.jpg'
import Multiverse10 from '../../assets/MultiverseImg/Multiverse10.jpg'
const Multiverse = () => {

  const Multiverse = [Multiverse1,Multiverse2,Multiverse3,Multiverse4,Multiverse5,Multiverse6,Multiverse7,Multiverse8,Multiverse9,Multiverse10];


  return (
    <div className='mt-10' >
        <h2 className='text-2xl font-bold mb-5'>Musical Multiverse</h2>
        <div className="overflow-scroll">
        <div className='flex gap-1'>
            {Multiverse.map((item, index)=> <img src={item} key={index} className='h-52 w-48'/>)}
        </div>
        </div>
    </div>
  )
}

export default Multiverse