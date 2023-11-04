'use client';
import { achievementsList } from '@/constants';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <div className='xl:gap-16 sm:my-10 md:my-12 md:pb-12'>
      <div className='flex flex-col items-center justify-between sm:border-[#33353F] sm:border rounded-md py-8 px-16  sm:flex-row '>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
              key={index}
            >
              <h2 className='title-section'>
                {achievement.prefix}
                <AnimatedNumbers
                  className='text-white text-4xl font-bold'
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale='ru-RU'
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-[#adb7be] text-base'>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
