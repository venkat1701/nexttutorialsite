'use client'
import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container flex justify-center items-center flex-col">
        <div className='paragraph-align'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='heading flex text-center text-3xl font-bold md:text-[54px] md:leading-[60px]'>A more effective way to track progress</h2>
          <p className='heading-paragraph text-center text-[22px] leading-[30px]'>Effortlessly turn your ideas into a fully functional, responsive website in just minutes with this template.</p>       
        </div>
        <div className='relative'>
          <motion.img src={productImage.src}alt="Product Image" className='mt-10'/>
          <motion.img src={pyramidImage.src} style={{translateY: translateY}} alt="Pyramid Image" height={262} width={262} className="absolute -right-36 -top-32 md:block hidden"/>
          <motion.img src={tubeImage.src} style={{translateY: translateY}} width={248} height={248} alt="Tube Image" className="hidden md:block absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  );
};
