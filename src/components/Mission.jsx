import React from "react";
import { DotBackgroundDemo } from "./DotBG";

export const Mission = () => {
  return (
    <div className="wrapper-section-about flex flex-col md:flex-row gap-10">
      <div className="basis-3/4">
        <h2 className="scroll-m-20 border-b pb-2 mb-6 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
          Миссия
        </h2>
        <h3 className="scroll-m-20 mb-8 text-xl font-semibold tracking-tight">
          Моя глобальная цель заключается в защите прав, свобод и законных
          интересов граждан и организаций. Основные аспекты моей миссии:
        </h3>
        <div>
          <ol>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              1. Справедливость. Стремлюсь обеспечить справедливое рассмотрение
              дел, выступая на стороне закона и помогая клиентам отстаивать их
              права в любых правовых спорах.
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
              4. Этика и конфиденциальность. Соблюдение профессиональной этики и
              сохранение адвокатской тайны — обязательные элементы моей работы,
              гарантирующие клиенту безопасность и доверие.
            </li>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              5. Пропаганда правовой культуры. Не только решаю конкретные дела,
              но и способствую формированию правовой грамотности в обществе,
              объясняя гражданам их права и обязанности.
            </li>
          </ol>
        </div>
      </div>
      <div className="relative basis-1/4 radial-gradient(circle, #000 1px, transparent 1px) dark:bg-dot-green-500 bg-[size:20px_20px] z-90">
        {/* <DotBackgroundDemo /> */}
      </div>
    </div>
  );
};
