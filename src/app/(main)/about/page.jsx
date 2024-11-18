import { CareerTimeline } from "@/components/CareerTimeline";
import { Mission } from "@/components/Mission";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

export const metadata = {
  title: "Об адвокате",
  description: "Об адвокате Романе Фёдоровиче Мордвинцеве",
};

function AboutPage() {
  return (
    <div className="wrapper-main">
      <h1 className="title-section">Об адвокате Р.Ф.&nbsp;Мордвинцеве</h1>
      <Mission />
      <CareerTimeline />
      <Testimonials />
    </div>
  );
}

export default AboutPage;

{
  /* 2.3. К обязательной информации, подлежащей размещению на персональном сайте адвоката, относятся: фамилия, имя, отчество адвоката; наименование адвокатского образования, в котором он состоит; реестровый номер адвоката; наименование адвокатской палаты, членом которой является адвокат; адрес, телефон и другая контактная информация. */
}
