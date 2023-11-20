import { achievementsList } from '@/constants';

const AchievementsSection = () => {
  return (
    <section className='wrapper-section'>
      <div className='flex flex-col items-center justify-between gap-6 md:gap-4 py-6 sm:flex-row sm:py-4 sm:px-6 lg:py-8 lg:px-10 rounded-lg border border-custom'>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              className='flex flex-col items-center justify-center md:gap-4'
              key={index}
            >
              <h2 className='flex text-2xl xs:text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
                {achievement.prefix}
                &nbsp;
                {achievement.value}
                &nbsp;
                {achievement.postfix}
              </h2>
              <p className='text-gray-600 dark:text-gray-400 text-sm xs:text-base text-center'>
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;
