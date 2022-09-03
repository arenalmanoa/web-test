import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const[nav, setNav] = useState(false);

    const[color, setColor] = useState('transparent');
    const[textColor, setTextColor] = useState('#F1F1F1');

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#F1F1F1')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#F1F1F1')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href="/">
                {/* <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Captur</h1> */}
                <Image src="/./logo-manoa.png" alt="Logo" width={80} height={80}/>
                
            </Link>
            
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Suites</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Hot Springs</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Dining</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Activities</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={40} className='text-[#BCD75F]' /> : <AiOutlineMenu size={40} className='text-[#BCD75F]'/>}
            </div>

            {/* Mobile menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-top w-full h-screen bg-black/90 text-center ease-in duration-300}' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-top w-full h-screen bg-black/95 text-center ease-in duration-300'}>
                <ul className='pt-8'>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/'>Suites</Link>
                    </li>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/#gallery'>Hot Springs</Link>
                    </li>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/portfolio'>Dining</Link>
                    </li>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/portfolio'>Activities</Link>
                    </li>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/portfolio'>Gallery</Link>
                    </li>
                    <li className='p-4 text-xl hover:text-gray-500'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar