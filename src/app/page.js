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
import Navbar from '../../components/Navbar';
import Fifth from '../../components/Fifth';
import Sixth from '../../components/Sixth';
import Seventh from '../../components/Seventh';


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

    const [displayReview1, setDisplayReview1] = useState(false);
    const [displayReview2, setDisplayReview2] = useState(false);
    const [displayReview3, setDisplayReview3] = useState(false);

    return (
        <div className='w-screen '>
            <Navbar />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Seventh />
            <Footer />
        </div >

    )
}


