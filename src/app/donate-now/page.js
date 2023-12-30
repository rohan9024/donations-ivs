"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import Navbar from '../../../components/Navbar';


const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
function page() {
  const [desc, setDesc] = useState("")
  const [email, setEmail] = useState("")
  const [paymentOption, setPaymentOption] = useState("recurring")
  const [paymentDuration, setPaymentDuration] = useState("")
  const paymentDurationList = [
    "Monthly",
    "Yearly"
  ]

  const handlePaymentDurationDropdown = (event) => {
    setPaymentDuration(event.target.value);
  };

  const submit = () => {

  }


  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className=' flex-col flex justify-center lg:justify-center items-center  lg:space-x-32   mx-10 lg:mt-20'>

        <div className='flex flex-col justify-center items-center mt-20 space-y-5 lg:w-1/2'>
          <h1 className={`${raleway.className} text-4xl font-bold mb-10`}>Donate Now</h1>
          <motion.div className='flex flex-col lg:flex-row justify-center items-center cursor-pointer border border-gray-300 rounded-2xl'>
            <motion.div
              className={`${paymentOption === 'one time'
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-none'
                } flex justify-center items-center  px-32 py-2 rounded-2xl`}
              onClick={() => setPaymentOption('one time')}
              whileHover={{ scale: 1.1 }} // Add animation on hover
              transition={{ type: 'linear', stiffness: 300 }}
            >
              <h1 className={`${manrope.className} text-xl`}>One Time</h1>
            </motion.div>
            <motion.div
              className={`${paymentOption === 'recurring'
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-none'
                } flex justify-center items-center px-32 py-2 rounded-2xl`}
              onClick={() => setPaymentOption('recurring')}
              whileHover={{ scale: 1.1 }} // Add animation on hover
              transition={{ type: 'linear', stiffness: 300 }}
            >
              <h1 className={`${manrope.className} text-xl`}>Recurring</h1>
            </motion.div>
          </motion.div>

          {/* Recurring */}
          <div className='flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-5 '>

            <div className='flex flex-col justify-start space-y-5'>
              <h1 className={`${manrope.className} text-xl `}>How often would you like to donate?</h1>
              <select
                value={paymentDuration}
                onChange={handlePaymentDurationDropdown}
                className="block w-72 md:w-96 py-2 px-5 leading-tight border border-gray-700 focus:outline-none cursor-pointer"
              >
                {paymentDurationList.map((paymentDuration, index) => (
                  <option key={index} value={paymentDuration}>
                    {paymentDuration}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-col justify-start space-y-5'>
              <h1 className={`${manrope.className} text-xl`}>For how long would you like to donate?</h1>
              <select
                value={paymentDuration}
                onChange={handlePaymentDurationDropdown}
                className="block w-72 md:w-96 py-2 px-5 leading-tight border border-gray-700 focus:outline-none cursor-pointer"
              >
                {paymentDurationList.map((paymentDuration, index) => (
                  <option key={index} value={paymentDuration}>
                    {paymentDuration}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Enter Email" className={`${manrope.className} placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96`} />
          <input onChange={(e) => setDesc(e.target.value)} required type="text" placeholder="Description" className={`${manrope.className}  mt-10 placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96 `} />


          <div disabled={!email || !desc} type="submit" onClick={submit} class="cursor-pointer mt-10 px-36 py-4 bg-black text-white rounded-lg">
            <span class="relative text-center">Submit</span>
          </div>

        </div>

      </motion.div>

    </>
  )
}

export default page