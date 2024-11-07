"use servser";

import Image from "next/image";
import { EmailSection } from "@/components/EmailSection";
import { MyTabs } from "@/components/MyTabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Контакты",
  description: "Контакты",
};

const ContactPage = () => {
  return (
    <div className="wrapper-main">
      <h1 className="title-section">Контакты</h1>
      <div className="my-8 text-lg leading-7 font-light">
        <p className="">
          400005, г. Волгоград, ул. Коммунистическая, д.21, офис 46
        </p>
        <Link
          className="flex max-w-max items-start link"
          href="mailto:r.mordvintseff@ya.ru"
          passHref={true}
        >
          <FaEnvelope
            size={16}
            className="relative self-center mr-3 text-gray-500"
          />
          <span>r.mordvintseff@yandex.ru</span>
        </Link>
        <Link
          className="flex max-w-max items-start link"
          href="tel:+79608670139"
          passHref={true}
        >
          <FaPhoneAlt
            size={16}
            className="relative self-center mr-3 text-gray-500"
          />
          <span>+7 960 867 01 39</span>
        </Link>
      </div>
      <div className="my-8">
        <iframe
          className="w-full h-96 border rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.4305638248998!2d44.52146907645624!3d48.716363971313235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb2f1cbd376d%3A0x30beec0f42a34a35!2sKommunisticheskaya%20Ulitsa%2C%2021%2C%20Volgograd%2C%20Volgogradskaya%20oblast&#39;%2C%20400005!5e0!3m2!1sen!2sru!4v1730895414415!5m2!1sen!2sru"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <EmailSection />
      </div>
    </div>
  );
};

export default ContactPage;

// API_KEY 733766115868-dss9o53k61af3p69d096ermm87b1i379.apps.googleusercontent.com
