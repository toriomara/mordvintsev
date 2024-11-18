import React from "react";
import { Card } from "./ui/card";

export const CareerTimeline = () => {
  return (
    <div className="wrapper-section-about">
      <h2 className="scroll-m-20 border-b pb-2 mb-6 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
        Профессиональный путь
      </h2>
      <div className="relative wrap overflow-hidden">
        <div className="border border-2-2 absolute border-gray-700 h-full left-1/2"></div>
        <div className="flex justify-between items-center w-full right-timeline mb-8">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-700 shadow-xl w-10 h-10 md:w-16 md:h-16 rounded-full z-20">
            <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
              2004
            </h1>
          </div>
          <Card className="order-1 w-5/12 p-2 sm:p-4 md:p-6 space-y-2">
            <h3 className="text-sm md:text-xl font-bold leading-4">
              Магистр юриспруденции
            </h3>
            <p className="text-xs md:text-base text-muted-foreground">
              Волгоградский государственный университет В 2004 году присвоена
              квалификация Юрист по специальности Юриспруденция
            </p>
          </Card>
        </div>
        <div className="flex justify-between flex-row-reverse items-center w-full left-timeline mb-8">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-700 shadow-xl w-10 h-10 md:w-16 md:h-16 rounded-full z-20">
            <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
              2014
            </h1>
          </div>
          <Card className="order-1 w-5/12 p-2 sm:p-4 md:p-6 space-y-2">
            <h3 className="text-sm md:text-xl font-bold leading-4">
              Адвокатская палата Волгоградской области
            </h3>
            <p className="text-xs md:text-base text-muted-foreground">
              В 2014 году награжден грамотой Адвокатской палаты Волгоградской
              области &quot;За профессиональное мастерство при защите прав,
              свобод и законных интересов граждан, продолжительную и безупречную
              работу&quot;
            </p>
          </Card>
        </div>
        <div className="flex justify-between items-center w-full right-timeline mb-8">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-700 shadow-xl w-10 h-10 md:w-16 md:h-16 rounded-full z-20">
            <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
              2021
            </h1>
          </div>
          <Card className="order-1 w-5/12 p-2 sm:p-4 md:p-6 space-y-2">
            <h3 className="text-sm md:text-xl font-bold leading-4">
              Общий юридический стаж более 20 лет
            </h3>
            <p className="text-xs md:text-base text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
