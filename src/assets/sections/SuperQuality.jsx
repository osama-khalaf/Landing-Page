import React from 'react'
import Button from '../../components/Button'
import { shoe8 } from '../images'

const SuperQuality = () => {
  return (
    <section id='about-us' className=' flex justify-between items-center max-lg:flex-xol gap-10 w-full max-container '>
      <div className=' flex flex-1 flex-col '>
        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red inline-block mt-3'>Super</span>
          <span className='text-coral-red inline-block mt-3'> Quality</span> Shoes
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur asperiores accusamus cum deleniti! Aspernatur dolore error dolor ea facere itaque fugiat eveniet voluptatum libero</p>
        <p className=' mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur asperiores </p>
        <div className=' mt-11'>
        <Button lable="View details" />
        </div>
      </div>
      <div className=' flex flex-1 justify-center items-center '>
        <img src={shoe8} alt="shoe8"
        width={570} height={522} className=' object-contain ' />
      </div>
    </section>
  )
}

export default SuperQuality