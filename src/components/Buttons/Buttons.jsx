import React from 'react'

const Buttons = () => {
    const btn = ["Romance", "Relax","Podcasts", "Energize", "Feel good","Commute", "Party", "Workout","Sad","Focus","Sleep"]
  return (
    <>
    <div className='overflow-scroll m-10'>
        <div className='flex gap-2 p-2 ' >
            {btn.map((item, index)=> <button key={index} className='flex h-4 w-auto p-4 rounded-md items-center  ButtonsItem'>{item}</button>)}
        </div>
    </div>
    </>
  )
}

export default Buttons


