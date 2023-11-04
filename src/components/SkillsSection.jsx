import { skills } from '@/constants';

const SkillsSection = () => {
  return (
    <section className='wrapper-section'>
      <h2 className='title-section'>Области права</h2>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-white'>
        {skills.map((skill, index) => (
          <li className='bg-transparent border-white' key={index}>
            {skill.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
