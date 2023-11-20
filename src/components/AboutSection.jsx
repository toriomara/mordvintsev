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
      <Image src='' width={200} height={500} alt='' />
      <div className='flex flex-col h-full mt-4 md:mt-0 text-left'>
        <h2 className='title-section md:text-start mb-4 md:mb-6'>Обо мне</h2>
        {/* <p className='text-base lg:text-lg'>
          [Здесь нужно больше информации о профессиональном пути]
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ut
          doloremque molestiae quia sit voluptas quas odio, aperiam perferendis
          quod suscipit neque amet ullam optio quibusdam iusto excepturi nam! Ex
          explicabo veritatis quod atque quis saepe repudiandae enim. Ipsum
          aperiam reiciendis iste totam. Sint impedit libero possimus sunt
          obcaecati eum, explicabo soluta voluptatem harum aperiam accusamus
          adipisci architecto error tempore itaque, aut aliquam eligendi quae
          ea! Quam voluptate quisquam ratione veritatis, itaque ipsam doloremque
          iure? Quo nulla maxime officiis ipsam animi commodi iste nostrum in,
          aliquam similique alias voluptatibus at, numquam optio tenetur
          inventore dolores necessitatibus modi fuga sequi magnam.
        </p> */}
        <div className='flex flex-row justify-start mt-8'>
          <TabButton
            selectTab={() => handleTabChange('skills')}
            active={tab === 'skills'}
          >
            Области права
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('education')}
            active={tab === 'education'}
          >
            Образование
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('certification')}
            active={tab === 'certification'}
          >
            Достижения
          </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};
