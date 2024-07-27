'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import {motion, useTransform, useScroll} from 'framer-motion';
import { useRef } from 'react';
export const CallToAction = () => {
  const actionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: actionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section ref={actionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-6 relative">
          <h2 className="heading">Sign up for free today</h2>
          <p className="heading-paragraph paragraph-align">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <motion.img src={starImage.src} alt="Star Image" style={{translateY: translateY}} width={360} className='absolute -left-[350px] -top-[137px]'/>
          <motion.img src={springImage.src} alt="Spring Image"  style={{translateY: translateY}} width={360} className="absolute -right-[331px] -top-[19px]"/>
          <div className="flex justif-center items-center gap-2">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn-text inline-flex gap-1 items-center justify-center"><span>Learn more</span><ArrowRight className="h-5 w-5"/></button>
          </div>
        </div>

      </div>
    </section>
  );
};
