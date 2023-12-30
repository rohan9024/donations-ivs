"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
function Navbar() {
    const [menu, setMenu] = useState(false)
    const router = useRouter()

    return (
        <>
            <section className='lg:w-screen  bg-[#135B3A] text-white'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className=' flex justify-between items-center mx-5  py-6 lg:mx-0 lg:p-5 lg:px-20'>
                    {/* Hidden on mobile screens */}
                    <div onClick={()=> router.push("/") } className={`${raleway.className}  hidden lg:flex transition ease-in  duration-300 cursor-pointer`} >
                        <Image
                            src="/logo-white.png"
                            width={3000}
                            height={3000}
                            alt="logo"
                            className='w-64 object-contain rounded-full'
                        />
                    </div>
                    {/* Hidden on large screens  */}

                    <div onClick={()=> router.push("/") } className={`${raleway.className} lg:hidden flex justify-center space-x-4 items-center  cursor-pointer `} >
                        <Image
                            src="/logo-white.png"
                            width={3000}
                            height={3000}
                            alt="logo"
                            className='w-64 object-contain rounded-full'
                        />
                    </div>
                    {
                        menu ?
                            (
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className='lg:hidden object-contain rounded-full p-3 hover:cursor-pointer bg-white' onClick={() => setMenu(false)}>
                                    <Image
                                        src="/close.png"
                                        width={20}
                                        height={20}
                                        alt="close icon"
                                        className='object-contain'
                                    />
                                </motion.div>
                            )
                            :
                            (
                                <motion.div
                                    className='lg:hidden object-contain rounded-full p-3 hover:cursor-pointer bg-white' onClick={() => setMenu(true)}>
                                    <Image
                                        src="/menu.png"
                                        width={20}
                                        height={20}
                                        alt="menu icon"
                                        className='object-contain '
                                    />
                                </motion.div>
                            )
                    }
                    <div className={`${manrope.className} hidden lg:flex lg:justify-evenly lg:items-center  lg:w-92 space-x-12`}>
                        <Link href="/donate-now" className=' transition ease-in  hover:text-gray-300  text-gray-100 duration-150 cursor-pointer p-2  '>Donate Now</Link>
                        <Link href="/contact-us" className=' transition ease-in  hover:text-gray-300  text-gray-100 duration-150 cursor-pointer p-2  '>Contact Us</Link>
                    </div>




                </motion.div>
                <motion.nav
                    initial={false}
                    animate={menu ? "open" : "closed"}
                    className={menu ? "flex justify-center items-center" : "hidden"}
                >
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                }
                            }
                        }}
                        style={{ pointerEvents: menu ? "auto" : "none" }}
                        className='flex flex-col justify-center items-center my-10 space-y-12'
                    >
                        <motion.a variants={itemVariants} className='text-xl' href="/donate-now" >Donate Now</motion.a>
                        <motion.a variants={itemVariants} className='text-xl ' href="/contact-us" >Contact Us</motion.a>
                    </motion.ul>
                </motion.nav>


            </section>
        </>
    )
}

export default Navbar