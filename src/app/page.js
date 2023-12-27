"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { easeOut, motion, useScroll } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
import First from '../../components/First';
import Second from '../../components/Second';
import Third from '../../components/Third';
import Fourth from '../../components/Fourth';
import Footer from '../../components/Footer';


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
export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter()
    const [scrollProgress, setScrollProgress] = useState(true)
    const [menu, setMenu] = useState(false)

    const [displayReview1, setDisplayReview1] = useState(false);
    const [displayReview2, setDisplayReview2] = useState(false);
    const [displayReview3, setDisplayReview3] = useState(false);


    return (
        <div className='w-screen '>

            <section className='lg:w-screen  bg-[#192F5A] text-white'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className=' flex justify-between items-center   mx-9 lg:mx-0 lg:p-5 lg:px-20'>
                    {/* Hidden on mobile screens */}
                    <div className={`${raleway.className}  hidden lg:flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                        <Image
                            src="/logo.png"
                            width={90}
                            height={90}
                            alt="logo"
                            className='object-contain rounded-full'
                        />
                    </div>
                    {/* Hidden on large screens  */}

                    <div className={`${raleway.className} lg:hidden flex justify-center space-x-4 items-center  cursor-pointer `} >
                        <Image
                            src="/logo.png"
                            width={60}
                            height={60}
                            alt="logo"
                            className=' object-contain rounded-full'
                        />
                    </div>
                    {
                        menu ?
                            (
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className='lg:hidden object-contain rounded-full p-4 hover:cursor-pointer' onClick={() => setMenu(false)}>
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
                                    className='lg:hidden object-contain rounded-full p-4 hover:cursor-pointer' onClick={() => setMenu(true)}>
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
                        <Link href="/donate-now" className=' transition ease-in  hover:font-bold hover:scale-105     p-2  cursor-pointer'>Donate Now</Link>
                        <Link href="/contact-us" className=' transition ease-in  hover:font-bold hover:scale-105     p-2  cursor-pointer'>Contact Us</Link>
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
            <First />
            <Second />
            <Third />
            <Fourth />
            <Footer />



        </div >
    )
}


