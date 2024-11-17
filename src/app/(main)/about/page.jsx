import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Об адвокате",
  description: "Об адвокате Романе Фёдоровиче Мордвинцеве",
};

function AboutPage() {
  return (
    <div className="wrapper-main">
      <h1 className="title-section">Об адвокате Р.Ф. Мордвинцеве</h1>
      <div className="wrapper-section-about flex flex-col md:flex-row gap-10">
        <div className="basis-3/4">
          <h2 className="scroll-m-20 border-b pb-2 mb-6 text-3xl font-semibold tracking-tight first:mt-0">
            Миссия
          </h2>
          <h3 className="scroll-m-20 mb-8 text-2xl font-semibold tracking-tight">
            Моя глобальная цель заключается в защите прав, свобод и законных
            интересов граждан и организаций. Основные аспекты моей миссии:
          </h3>
          <div>
            <ol>
              <li className="leading-6 [&:not(:first-child)]:mt-6">
                1. Справедливость. Стремлюсь обеспечить справедливое
                рассмотрение дел, выступая на стороне закона и помогая клиентам
                отстаивать их права в любых правовых спорах.
              </li>
              <li className="leading-6 [&:not(:first-child)]:mt-6">
                2. Правовая защита. Главная задача — защищать интересы клиента,
                будь то в суде, при заключении сделок или в других правовых
                ситуациях. Это включает подготовку документов, консультации и
                представительство.
              </li>
              <li className="leading-6 [&:not(:first-child)]:mt-6">
                3. Доступ к правосудию. Содействую тому, чтобы каждый мой клиент
                имел возможность получить квалифицированную юридическую помощь,
                независимо от своего положения или обстоятельств.
              </li>
              <li className="leading-6 [&:not(:first-child)]:mt-6">
                4. Этика и конфиденциальность. Соблюдение профессиональной этики
                и сохранение адвокатской тайны — обязательные элементы моей
                работы, гарантирующие клиенту безопасность и доверие.
              </li>
              <li className="leading-6 [&:not(:first-child)]:mt-6">
                5. Пропаганда правовой культуры. Не только решаю конкретные
                дела, но и способствую формированию правовой грамотности в
                обществе, объясняя гражданам их права и обязанности.
              </li>
            </ol>
          </div>
        </div>
        <div className="basis-1/4">IMAGES</div>
      </div>
      <div className="wrapper-section-about">
        <h2 className="scroll-m-20 border-b pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">
          Профессиональный путь
        </h2>
        <div class="">
          <div className="relative wrap overflow-hidden">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  2004
                </h1>
              </div>
              <Card className="order-1 w-5/12 p-6">
                <h3 className="text-xl font-bold">Магистр Юриспруденции</h3>
                <p className="text-muted-foreground">
                  Волгоградский государственный университет В 2004 году
                  присвоена квалификация Юрист по специальности Юриспруденция
                </p>
              </Card>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  2014
                </h1>
              </div>
              <Card className="order-1 w-5/12 p-6">
                <h3 className="text-xl font-bold">
                  Адвокатская палата Волгоградской области
                </h3>
                <p className="text-muted-foreground">
                  В 2014 году награжден грамотой Адвокатской палаты
                  Волгоградской области &quot;За профессиональное мастерство при
                  защите прав, свобод и законных интересов граждан,
                  продолжительную и безупречную работу&quot;
                </p>
              </Card>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  2021
                </h1>
              </div>
              <Card className="order-1 w-5/12 p-6">
                <h3 className="text-xl font-bold">
                  Общий юридический стаж более 20 let
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

{
  /* 2.3. К обязательной информации, подлежащей размещению на персональном сайте адвоката, относятся: фамилия, имя, отчество адвоката; наименование адвокатского образования, в котором он состоит; реестровый номер адвоката; наименование адвокатской палаты, членом которой является адвокат; адрес, телефон и другая контактная информация. */
}
