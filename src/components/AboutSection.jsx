'use client';
import Image from 'next/image';
import { useTransition, useState } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequilize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: 'Certification',
    id: 'certification',
    content: (
      <ul className='list-disc pl-2'>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='grid md:grid-cols-2 gap-8 items-start xl:gap-16 md:my-12 md:pb-12'>
      <Image src='/images/work-space.jpg' width={500} height={500} alt='' />
      <div className='flex flex-col h-full mt-4 md:mt-0 text-left'>
        <h2 className='title-section md:text-start mb-4 md:mb-6'>Обо мне</h2>
        <p className='text-base lg:text-lg'>
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and I
          am excited to work with others to create amazing applications.
        </p>
        <div className='flex flex-row justify-start mt-8'>
          <TabButton
            selectTab={() => handleTabChange('skills')}
            active={tab === 'skills'}
          >
            {' '}
            Skills{' '}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('education')}
            active={tab === 'education'}
          >
            {' '}
            Education{' '}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('certification')}
            active={tab === 'certification'}
          >
            {' '}
            Certification{' '}
          </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};
