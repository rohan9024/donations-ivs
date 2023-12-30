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
  const [paymentDuration, setPaymentDuration] = useState("Monthly")
  const [amount, setAmount] = useState(0)
  const [monthlyDuration, setMonthlyDuration] = useState()
  const [yearlyDuration, setYearlyDuration] = useState()
  const [currency, setCurrency] = useState("USD | United States Dollar")
  const paymentDurationList = [
    "Monthly",
    "Yearly"
  ]
  const yearlyDurationList = [
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years",
    "8 Years",
    "9 Years",
    "10 Years",
    "11 Years"
  ];

  const monthlyDurationList = [
    "1 Month",
    "2 Months",
    "3 Months",
    "4 Months",
    "5 Months",
    "6 Months",
    "7 Months",
    "8 Months",
    "9 Months",
    "10 Months",
    "11 Months"
  ];

  const currencyList = [
    "AED | United Arab Emirates Dirham",
    "AFN | Afghan Afghani",
    "ALL | Albanian Lek",
    "AMD | Armenian Dram",
    "ANG | Netherlands Antillean Guilder",
    "AOA | Angolan Kwanza",
    "ARS | Argentine Peso",
    "AUD | Australian Dollar",
    "AWG | Aruban Florin",
    "AZN | Azerbaijani Manat",
    "BAM | Bosnia And Herzegovina Convertible Mark",
    "BBD | Barbados Dollar",
    "BDT | Bangladeshi Taka",
    "BGN | Bulgarian Lev",
    "BHD | Bahraini Dinar",
    "BIF | Burundian Franc",
    "BMD | Bermudian Dollar (customarily Known As Bermuda Dollar)",
    "BND | Brunei Dollar",
    "BOB | Boliviano",
    "BRL | Brazilian Real",
    "BSD | Bahamian Dollar",
    "BTN | Bhutanese Ngultrum",
    "BWP | Botswana Pula",
    "BZD | Belize Dollar",
    "CAD | Canadian Dollar",
    "CDF | Congolese Franc",
    "CHF | Swiss Franc",
    "CLF | Unidad De Fomento (funds Code)",
    "CLP | Chilean Peso",
    "CNY | Chinese Yuan",
    "COP | Colombian Peso",
    "CRC | Costa Rican Colon",
    "CUC | Cuban Convertible Peso",
    "CUP | Cuban Peso",
    "CVE | Cape Verde Escudo",
    "CZK | Czech Koruna",
    "DJF | Djiboutian Franc",
    "DKK | Danish Krone",
    "DOP | Dominican Peso",
    "DZD | Algerian Dinar",
    "EGP | Egyptian Pound",
    "ERN | Eritrean Nakfa",
    "ETB | Ethiopian Birr",
    "EUR | Euro",
    "FJD | Fiji Dollar",
    "FKP | Falkland Islands Pound",
    "GBP | Pound Sterling",
    "GEL | Georgian Lari",
    "GHS | Ghanaian Cedi",
    "GIP | Gibraltar Pound",
    "GMD | Gambian Dalasi",
    "GNF | Guinean Franc",
    "GTQ | Guatemalan Quetzal",
    "GYD | Guyanese Dollar",
    "HKD | Hong Kong Dollar",
    "HNL | Honduran Lempira",
    "HRK | Croatian Kuna",
    "HTG | Haitian Gourde",
    "HUF | Hungarian Forint",
    "IDR | Indonesian Rupiah",
    "ILS | Israeli New Shekel",
    "INR | Indian Rupee",
    "IQD | Iraqi Dinar",
    "IRR | Iranian Rial",
    "ISK | Icelandic Króna",
    "JMD | Jamaican Dollar",
    "JOD | Jordanian Dinar",
    "JPY | Japanese Yen",
    "KES | Kenyan Shilling",
    "KGS | Kyrgyzstani Som",
    "KHR | Cambodian Riel",
    "KMF | Comoro Franc",
    "KPW | North Korean Won",
    "KRW | South Korean Won",
    "KWD | Kuwaiti Dinar",
    "KYD | Cayman Islands Dollar",
    "KZT | Kazakhstani Tenge",
    "LAK | Lao Kip",
    "LBP | Lebanese Pound",
    "LKR | Sri Lankan Rupee",
    "LRD | Liberian Dollar",
    "LSL | Lesotho Loti",
    "LYD | Libyan Dinar",
    "MAD | Moroccan Dirham",
    "MDL | Moldovan Leu",
    "MGA | Malagasy Ariary",
    "MKD | Macedonian Denar",
    "MMK | Myanma Kyat",
    "MNT | Mongolian Tugrik",
    "MOP | Macanese Pataca",
    "MUR | Mauritian Rupee",
    "MVR | Maldivian Rufiyaa",
    "MWK | Malawian Kwacha",
    "MXN | Mexican Peso",
    "MYR | Malaysian Ringgit",
    "MZN | Mozambican Metical",
    "NAD | Namibian Dollar",
    "NGN | Nigerian Naira",
    "NIO | Nicaraguan Córdoba",
    "NOK | Norwegian Krone",
    "NPR | Nepalese Rupee",
    "NZD | New Zealand Dollar",
    "OMR | Omani Rial",
    "PAB | Panamanian Balboa",
    "PEN | Peruvian Nuevo Sol",
    "PGK | Papua New Guinean Kina",
    "PHP | Philippine Peso",
    "PKR | Pakistani Rupee",
    "PLN | Polish Złoty",
    "PYG | Paraguayan Guaraní",
    "QAR | Qatari Riyal",
    "RON | Romanian New Leu",
    "RSD | Serbian Dinar",
    "RWF | Rwandan Franc",
    "SAR | Saudi Riyal",
    "SBD | Solomon Islands Dollar",
    "SCR | Seychelles Rupee",
    "SDG | Sudanese Pound",
    "SEK | Swedish Krona/kronor",
    "SGD | Singapore Dollar",
    "SHP | Saint Helena Pound",
    "SLL | Sierra Leonean Leone",
    "SOS | Somali Shilling",
    "SRD | Surinamese Dollar",
    "SSP | South Sudanese Pound",
    "STD | São Tomé And Príncipe Dobra",
    "SYP | Syrian Pound",
    "SZL | Swazi Lilangeni",
    "THB | Thai Baht",
    "TJS | Tajikistani Somoni",
    "TMT | Turkmenistani Manat",
    "TND | Tunisian Dinar",
    "TOP | Tongan Pa'anga",
    "TRY | Turkish Lira",
    "TTD | Trinidad And Tobago Dollar",
    "TWD | New Taiwan Dollar",
    "TZS | Tanzanian Shilling",
    "UAH | Ukrainian Hryvnia",
    "UGX | Ugandan Shilling",
    "USD | United States Dollar",
    "UYU | Uruguayan Peso",
    "UZS | Uzbekistan Som",
    "VND | Vietnamese Dong",
    "VUV | Vanuatu Vatu",
    "WST | Samoan Tala",
    "XAF | CFA Franc BEAC",
    "XCD | East Caribbean Dollar",
    "XDR | Special Drawing Rights",
    "XOF | CFA Franc BCEAO",
    "XPF | CFP Franc",
    "YER | Yemeni Rial",
    "ZAR | South African Rand"
  ];


  const handlePaymentDurationDropdown = (event) => {
    setPaymentDuration(event.target.value);
  };

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleMonthlyDonation = (event) => {
    setMonthlyDuration(event.target.value);
  };
  const handleYearlyDonation = (event) => {
    setYearlyDuration(event.target.value);
  };


  const isInputValid = (input) => {
    // Check if the input contains only numbers
    return /^[0-9]+$/.test(input);
  };


  const paymentWithPaytm = () => {
    if (isInputValid(monthlyAmount)) {
      // Perform your submission logic here
      alert('Submit successful');
    } else {
      // Display an error message or take appropriate action
      alert('Invalid input. Please enter only numbers.');
    }
  }
  const paymentWithPaypal = () => {
    if (isInputValid(monthlyAmount)) {
      // Perform your submission logic here
      alert('Submit successful');
    } else {
      // Display an error message or take appropriate action
      alert('Invalid input. Please enter only numbers.');
    }
  }




  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className=' flex-col flex justify-center lg:justify-center items-center  lg:space-x-32   mx-10 lg:my-20'>

        <div className='flex flex-col justify-center items-center mt-20 lg:w-auto mx-5 md:mx-0 space-y-10 lg:border lg:border-gray-300 lg:p-10 lg:rounded-2xl lg:shadow-lg'>
          <h1 className={`${manrope.className} text-4xl font-bold mb-10`}>Donate Now</h1>
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
          <>

            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-5 md:space-y-0 mx-20 md:mx-0 '>

              <div className='flex flex-col justify-start space-y-5'>
                <h1 className={`${manrope.className} md:text-xl text-md`}>How often would you like to donate?</h1>
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
              {
                paymentDuration === "Yearly" ?
                  (<div className='flex flex-col justify-start space-y-5'>
                    <h1 className={`${manrope.className} md:text-xl text-md`}>For how long would you like to donate?</h1>
                    <select
                      value={yearlyDuration}
                      onChange={handleYearlyDonation}
                      className="block w-72 md:w-96 py-2 px-5 leading-tight border border-gray-700 focus:outline-none cursor-pointer"
                    >
                      {yearlyDurationList.map((yearlyDuration, index) => (
                        <option key={index} value={yearlyDuration}>
                          {yearlyDuration}
                        </option>
                      ))}
                    </select>
                  </div>)
                  :
                  (<div className='flex flex-col justify-start space-y-5'>
                    <h1 className={`${manrope.className} md:text-xl text-md`}>For how long would you like to donate?</h1>
                    <select
                      value={monthlyDuration}
                      onChange={handleMonthlyDonation}
                      className="block w-72 md:w-96 py-2 px-5 leading-tight border border-gray-700 focus:outline-none cursor-pointer"
                    >
                      {monthlyDurationList.map((monthlyDuration, index) => (
                        <option key={index} value={monthlyDuration}>
                          {monthlyDuration}
                        </option>
                      ))}
                    </select>
                  </div>)

              }

            </div>
            <div className='flex flex-col justify-start space-y-5 '>

              <h1 className={`${manrope.className} md:text-xl text-md`}>Enter the monthly amount</h1>
              <div className='flex justify-center items-center '>
                <select
                  value={currency}
                  onChange={handleCurrency}
                  className="block w-52 lg:w-96 py-2 px-5 leading-tight border border-gray-700 focus:outline-none cursor-pointer"
                >
                  {currencyList.map((currency, index) => (
                    <option key={index} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
                <input onChange={(e) => setAmount(e.target.value)} required type="text" placeholder="100" className={`${manrope.className} placeholder:text-gray-500 px-5 py-2 w-20 lg:w-28  outline-none border border-gray-800 `} />
              </div>

            </div>
            <div className='bg-gray-300 w-full h-[1px] my-10 shadow-md' />

            {/* Personal Details */}
            <div className='flex flex-col justify-center lg:items-start items-center space-y-5 '>
              <h1 className={`${raleway.className} text-4xl font-bold mb-10`}>Your Information</h1>
              <section className='flex lg:flex-row flex-col justify-evenly items-center lg:space-x-5 lg:space-y-0 space-y-5'>
                <div className='flex flex-col space-y-5'>
                  <h1 className={`${manrope.className} md:text-xl text-md `}>First Name</h1>
                  <input onChange={(e) => setFirstName(e.target.value)} required type="text" placeholder="First Name" className={`${manrope.className} placeholder:text-gray-800 px-5 w-72 py-2  outline-none border border-gray-800 lg:w-96`} />
                </div>
                <div className='flex flex-col space-y-5'>
                  <h1 className={`${manrope.className} md:text-xl text-md `}>Last Name</h1>
                  <input onChange={(e) => setLastName(e.target.value)} required type="text" placeholder="Last Name" className={`${manrope.className} placeholder:text-gray-800 px-5 w-72 py-2  outline-none border border-gray-800 lg:w-96`} />
                </div>
              </section>

              <div classname="flex flex-col justify-center items-center ">
                <h1 className={`${manrope.className} md:text-xl text-md`}>Email</h1>
                <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Email" className={`${manrope.className} placeholder:text-gray-800 px-5 w-72 py-2  outline-none border border-gray-800 lg:w-96`} />
              </div>
            </div>


            <div className='bg-gray-300 w-full h-[1px] my-10 shadow-md' />


            <div className='flex flex-col  justify-center items-center '>
              <h1 className={`${raleway.className} text-xl font-normal `}>{paymentDuration} Donation</h1>
              <h1 className={`${raleway.className} text-4xl font-bold mb-10 mt-2`}>{currency.slice(0, 3)} {amount}</h1>

              {
                currency == "INR | Indian Rupee" ?
                  (<div type="submit" onClick={paymentWithPaytm} class={` flex justify-center items-center space-x-10 cursor-pointer mt-5 w-auto px-10 py-4 mb-10 bg-green-700  text-white rounded-lg`}>
                    <h1 class={`${manrope.className} text-left font-bold `}>Pay Via Paytm</h1>
                  </div>)
                  : (<div type="submit" onClick={paymentWithPaypal} class={` flex justify-center items-center space-x-10 cursor-pointer mt-5 w-auto px-10 py-4 mb-10 bg-green-700  text-white rounded-lg`}>
                    <h1 class={`${manrope.className} text-left font-bold `}>Pay Via Paypal</h1>
                  </div>)}
            </div>
          </>





        </div>

      </motion.div>

    </>
  )
}

export default page