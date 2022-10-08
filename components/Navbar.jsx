import React, {useState} from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/Ai'
import { BsCart3 } from 'react-icons/bs'

const Navbar = () => {

    const categoryList = ['All categories', 'Alexa Skill', 'Amazon Devices', 'Amazon Fashion', 'Amazon fresh', 'Amazon pharmacy', 'Appliances', 'Apps & Games', 'Baby', 'Beauty', 'Books', 'Car & MotorBike', 'Cloting & Accessories', 'Collectible', 'Computer & Accessories', 'Deals', 'Electronics', 'Furniture', 'Garden & Outdoors', 'Gift Cards']

    const LanguageList = ['English - EN', 'हिन्दी - HI', 'தமிழ் - TA', 'తెలుగు - TE', 'ಕನ್ನಡ - KE', 'മലയാളം - ML', 'বাংলা - BN', 'मराठी - MR' ]

    const handleCategory = () => {
        const catList = document.querySelectorAll('.category__list')
        catList.classList.toggle('hidden')
    }

    const handleLanguage = () => {4
        const langList = document.querySelectorAll('.lang__list')
        langList.classList.toggle('hidden')
    }

  return (
    <>
        <nav className='w-full md:h-[60px] static bg-[#131921] flex flex-col md:flex-row items-center md:space-x-2 space-y-2 p-1 md:px-4'>
            <div className='hidden md:flex flex-2 justify-between order-1 space-x-2'>
                <div>
                    <img src="/logo.png" alt="logo" className='w-[50px] md:w-[100px]' />
                </div>

                <div className='flex items-center'>
                    <IoLocationOutline className='text-sm md:text-xl text-white'/>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-sm text-white'>Hello</p>
                        <strong className='text-[10px] md:text-sm text-white'>Select your address</strong>
                    </div>
                </div>
            </div>
            <div className='w-full md:hidden flex flex-2 justify-between order-1'>
                <div className='flex items-center'>
                    <img src="/logo.png" alt="logo" className='w-[50px] md:w-[100px]' />
                </div>

                <div className='flex items-center'>
                    <IoLocationOutline className='text-sm md:text-xl text-white'/>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-sm text-white'>Hello</p>
                        <strong className='text-[10px] md:text-sm text-white'>Select your address</strong>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-1 order-2'>
                <div className='category__btn flex items-center bg-[#f3f3f3] px-1 md:px-3 rounded-l-[3px] cursor-pointer border-gray-300 border-r-[1px]' onClick={handleCategory}>
                    <p className='text-black text-[10px] md:text-sm'>All</p>
                    <IoMdArrowDropdown className='text-black'/>
                </div>
                <div className='hidden category__list absolute top-20 md:top-14 bg-[#eaededd9] z-10'>
                    <ul className='h-[150px] md:h-[300px] overflow-y-auto p-1 cursor-pointer'>
                        {categoryList.map((category, index)=> (
                            <li key={index} className='text-black text-[10px] md:text-[15px] hover:bg-blue-500 hover:text-white' onClick={handleCategory}>{category}</li>
                        ))}
                    </ul>
                </div>
                <input type="search" name="search" id="" className='bg-white py-0 md:py-2 w-full focus:outline-none text-black' />
                <div className='px-2 flex items-center bg-[#febd69] rounded-r-[3px] cursor-pointer'>
                    <AiOutlineSearch color={'black'} className='text-base md:text-2xl'/>
                </div>
            </div>

            <div className='hidden md:flex flex-2 justify-between order-3'>
                <div className='flex items-center'>
                    <div className=' lang__btn flex items-center px-0 md:px-3 rounded-l-[3px] cursor-pointer' onClick={handleLanguage}>
                        <p className='text-white text-[5px] md:text-sm'>EN</p>
                        <IoMdArrowDropdown className='text-white'/>
                    </div>
                    <div className='hidden lang__list absolute top-8 md:top-14 bg-[#eaededd9] p-2 z-10'>
                        <ul className='max-h-[300px] overflow-y-auto cursor-pointer space-y-0 md:space-y-1'>
                            {LanguageList.map((language, index)=> (
                                <li key={index} className='flex space-x-1 space-y-1 hover:bg-blue-500' onClick={handleLanguage}>
                                    <input type="radio" name="lang" id="" />
                                    <label htmlFor="lang" className='text-black text-[10px] md:text-[15px] hover:text-white'>{language}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='flex items-center space-x-2 md:space-x-6'>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-xs text-white'>Hello, Sign in</p>
                        <strong className='text-[10px] md:text-sm text-white'>Account & Lists</strong>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-xs text-white'>Returns</p>
                        <strong className='text-[10px] md:text-sm text-white'>& Orders</strong>
                    </div>
                    <div className='flex items-center'>
                    <BsCart3 className='text-lg md:text-3xl text-white'/>
                    <strong className='text-xs md:text-lg text-[#f08804]' >0</strong>
                    </div>
                </div>
            </div>

            <div className='w-full md:hidden flex flex-2 justify-between order-3'>
                <div className='flex items-center'>
                    <div className='lang__btn flex items-center px-0 md:px-3 rounded-l-[3px] cursor-pointer' onClick={handleLanguage}>
                        <p className='text-white text-[10px] md:text-sm'>EN</p>
                        <IoMdArrowDropdown className='text-white'/>
                    </div>
                    <div className='hidden lang__list absolute left-0 top-20 md:top-14 bg-white p-2 z-10'>
                        <ul className='max-h-[300px] overflow-y-auto cursor-pointer space-y-0 md:space-y-1'>
                            {LanguageList.map((language, index)=> (
                                <li key={index} className='flex space-x-1 space-y-1 hover:bg-blue-500' onClick={handleLanguage}>
                                    <input type="radio" name="lang" id="" />
                                    <label htmlFor="lang" className='text-black text-[10px] md:text-[15px] hover:text-white'>{language}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='flex items-center space-x-2 md:space-x-6'>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-xs text-white'>Hello, Sign in</p>
                        <strong className='text-[10px] md:text-sm text-white'>Account & Lists</strong>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[10px] md:text-xs text-white'>Returns</p>
                        <strong className='text-[10px] md:text-sm text-white'>& Orders</strong>
                    </div>
                    <div className='flex items-center'>
                    <BsCart3 className='text-lg md:text-3xl text-white'/>
                    <strong className='text-xs md:text-lg text-[#f08804]' >0</strong>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar