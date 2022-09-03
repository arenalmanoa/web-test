import React, {useState} from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft, FaArrowCircleRight}  from 'react-icons/fa'


const Slider = ({slides}) => {

    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
        <h4 className="text-2xl text-left pt-8 pb-2 px-6">
            TAKE A MOMENT TO
        </h4>

        <h2 className="text-6xl text-left pt-0 pb-6 px-6 font-bold">
            Explore our suites
        </h2>
        <hr className="h-1 pt-0 ml-6 mb-8 w-1/3 bg-[#BCD75F]"/>
        <div className='relative flex justify-center py-4'>       
        {SliderData.map((slide, index) => {
            return (
                <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                    
                        <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/80 cursor-pointer select-none z-[2] hover:text-[#BCD75F]' size={50} />
                        {index === current && (
                            <Image src={slide.image} alt ='' width='1440' height='968' objectFit='cover' />
                        )}
                        <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/80 cursor-pointer select-none z-[2] hover:text-[#BCD75F]' size={50} />
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default Slider