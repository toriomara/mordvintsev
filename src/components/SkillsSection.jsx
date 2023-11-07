'use client';
import { skills } from '@/constants';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeAnimationVariants = {
  initial: { y: 100, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='wrapper-section'>
      <h2 className='title-section'>Области права</h2>
      <ul
        className='flex flex-wrap justify-center gap-2 text-lg text-white'
        ref={ref}
      >
        {skills.map((skill, index) => (
          <motion.li
            className='bg-transparent  px-2 py-1 mx-1 my-1 rounded-md font-thin'
            style={{ border: '1px solid #696969' }}
            key={index}
            variants={fadeAnimationVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            custom={index}
            // whileInView='animate'
          >
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
