import React from 'react'
import Button from '../../components/Button'
import { offer } from '../images'
import { arrowRight } from '../icons'

const SpecialOffers = () => {
  return (
    <section className=' flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container '>
      <div className=' flex-1 '>
        <img src={offer} alt="offer" width={773} height={687} className=' object-contain w-full ' />
      </div>
      <div className=' flex flex-1 flex-col '>
        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>Special</span> Offer
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur asperiores accusamus cum deleniti! Aspernatur dolore error dolor ea facere itaque fugiat eveniet voluptatum libero</p>
        <p className=' mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur asperiores </p>
        <div className=' mt-11 flex flex-wrap gap-4'>
        <Button lable="View details" iconURL={arrowRight} />
        <Button lable="Learn more" backgroundColor="bg-white" borderColor= "border-slate-gray" textColor ="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers