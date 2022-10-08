import React from 'react'

const Footer = () => {

    const handleTop = () => {
      document.documentElement.scrollTop = 0;
    }
  
  return (
    <>
     <div className='bg-[#232F3E]'>
      <div className='flex justify-center bg-[#37475A] hover:bg-[#566577]'>
        <button className='w-full h-full text-white font-semibold py-5' onClick={handleTop}><span>Back to top</span></button>
      </div>
      <div className='w-[100%] md:w-[80%] lg:w-[60%] flex justify-center mx-auto py-10 border-b border-gray-500'>
        <div className='w-full flex flex-col md:flex-row justify-between px-4 md:px-0 space-y-8 md:space-y-0 text-white'>
          <div className='space-y-2'>
            <strong>Get to Know US</strong>
            <p className='text-sm text-gray-200'>About US</p>
            <p className='text-sm text-gray-200'>Careers</p>
            <p className='text-sm text-gray-200'>Press Release</p>
            <p className='text-sm text-gray-200'>Amazon Science</p>
          </div>

          <div className='space-y-2'>
            <strong>Connect with Us</strong>
            <p className='text-sm text-gray-200'>Facebook</p>
            <p className='text-sm text-gray-200'>Twitter</p>
            <p className='text-sm text-gray-200'>Instagram</p>
          </div>

          <div className='space-y-2'>
            <strong>Make Money with Us</strong>
            <p className='text-sm text-gray-200'>Sell on Amazon</p>
            <p className='text-sm text-gray-200'>Sell under Amazon accelerator</p>
            <p className='text-sm text-gray-200'>Amazon global selling</p>
            <p className='text-sm text-gray-200'>Become an Affiliate</p>
            <p className='text-sm text-gray-200'>Fulfilment on Amazon</p>
            <p className='text-sm text-gray-200'>Advertise your products</p>
            <p className='text-sm text-gray-200'>Amazon pay on merchants</p>
          </div>

          <div className='space-y-2'>
            <strong>Let Us Help You</strong>
            <p className='text-sm text-gray-200'>COVID-19 and Amazon</p>
            <p className='text-sm text-gray-200'>Your Account</p>
            <p className='text-sm text-gray-200'>Returns Centre</p>
            <p className='text-sm text-gray-200'>100% Purchase Protection</p>
            <p className='text-sm text-gray-200'>Amazon App Download</p>
            <p className='text-sm text-gray-200'>Amazon Assistant Download</p>
            <p className='text-sm text-gray-200'>Help</p>
          </div>
        </div>
      </div>
      <div className='py-5'>
          <div className='flex justify-center'>
            <img src="/logo.png" alt="logo" className='w-[100px]' />
          </div>
      </div>
      <div className='mx-auto pb-5'>
       <div className='w-full flex flex-wrap justify-center space-x-4 text-gray-200 text-sm px-5'>
       <p>India</p>
        <p>Australia</p>
        <p>Brazil</p>
        <p>Canada</p>
        <p>China</p>
        <p>France</p>
        <p>Germany</p>
        <p>Italy</p>
        <p>Japan</p>
        <p>Mexico</p>
        <p>Netherlands</p>
        <p>Poland</p>
        <p>Singapore</p>
        <p>Spain</p>
        <p>UAE</p>
       </div>
      </div>
     </div>
    </>
  )
}

export default Footer