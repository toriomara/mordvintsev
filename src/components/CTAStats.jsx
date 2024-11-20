import Image from 'next/image';
import { AiFillFire, AiFillLock, AiFillCar  } from "react-icons/ai";

export const CTAStats = () => {
  return (
    <section className='grid grid-cols-1 gap-x-14 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 wrapper-section gap-4'>
      <Image
        src='https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Product screenshot'
        className='rounded-xl opacity-30'
        width={2432}
        height={1442}
      />
      <div className=''>
        <div className='lg:max-w-lg'>
          <h2 className='text-base font-semibold leading-7 text-primary-600'>
            Немного статистики
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight  sm:text-4xl'>
            Если есть сомнения — не медлите!
          </p>
          <p className='mt-6 text-lg leading-7'>
            По данным исследования NASCL за 2019 год результат защиты интересов
            гражданина/организации в суде напрямую зависел от скорости обрящения
            к квалифицированному защитнику*
          </p>
          <dl className='mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none'>
            {features.map((feature, index) => (
              <div key={index} className='relative pl-9'>
                <dt className='inline font-semibold '>
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-primary-600'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>{' '}
                <dd className='inline'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

// Наименование адвокатского образования, реестровый номер и наименование адвокатской палаты

const features = [
  {
    name: 'Оперативность.',
    description: 'Выезжаю к подзащитному до заключения договора.',
    icon: AiFillFire,
  },
  {
    name: 'Оперативность.',
    description: 'Выезжаю к подзащитному до заключения договора.',
    icon: AiFillLock,
  },
  {
    name: 'Оперативность.',
    description: 'Выезжаю к подзащитному до заключения договора.',
    icon: AiFillCar,
  },
];
