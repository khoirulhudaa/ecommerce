import React from 'react'
import { BGHero1 } from '../../assets'
import { Button } from '../../component'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative w-screen px-[50px] mt-[30px] h-max'>
      <div className='full bg-white rounded-lg shadow-lg h-max flex'>
        <div className='w-full relative overflow-hidden rounded-lg h-[400px]'>
            <div className='absolute z-[20] top-[20%] left-[40px]'>
                <h2 className='text-[32px] text-[#1C1C1C]'>Latest trending</h2>
                <h1 className='text-[40px] font-bold text-[#1C1C1C]'>Electronic items</h1>
                <Link to='/list-product'>
                    <Button text="Source Now"style='mt-3 w-max' />
                </Link>
            </div>
            <img src={BGHero1} className='w-full h-auto'  alt="backgroundHero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
