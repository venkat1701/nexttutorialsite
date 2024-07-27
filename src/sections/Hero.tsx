'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import {easeInOut, motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]

  })
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);



  return (
    <section ref={heroRef} className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_88%)] overflow-x-clip md:pt-5 md:pb-10'>
      <div className="container">
        <div  className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div>
              <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here!</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts and celebrate your success.</p>
            </div>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1"><span>Learn more</span> <ArrowIcon className="h5 w-5"/></button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
              src={cogImage.src} 
              alt="Cog Image" 
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 -z-1 lg:left-0'
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: easeInOut
              }}
            />
            <motion.img 
              src={cylinderImage.src} 
              width={220} 
              height={220} 
              alt="Cylinder Image" 
              className='hidden md:block -top-8 -left-32 md:absolute' 
              style={{
                translateY: translateY
              }}
            />
            <motion.img src={noodleImage.src} 
              width={220} 
              height={220} 
              alt="Noodle Image" 
              className=" hidden lg:block absolute rotate-[30deg] top-[524px] left-[448px]"
              style={{
                rotate: 30,
                translateY: translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
