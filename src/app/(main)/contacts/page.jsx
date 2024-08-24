import { EmailSection } from "@/components/EmailSection";
import { MyTabs } from "@/components/MyTabs";

export const metadata = {
  title: "Контакты",
  description: "Контакты",
};

const ContactPage = () => {
  return (
    <div className="wrapper-main">
      <EmailSection />
      <p className="mt-16">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem facere
        numquam suscipit eius exercitationem eaque repellat repudiandae tenetur
        deleniti adipisci quam, maiores deserunt perferendis. Totam provident
        similique nisi assumenda? Aspernatur reiciendis rerum in officia ab ea
        quaerat unde repudiandae cupiditate odio, sit eum. Et quibusdam possimus
        optio sunt ut dolorum accusantium in facilis quod, dignissimos corrupti
        nostrum assumenda voluptate deserunt aut modi ea ab id similique ullam
        aliquid nam explicabo? Beatae minima dicta, illo eos nulla facilis
        magnam numquam soluta ipsa, dolores nam sint, explicabo tempora saepe
        fuga quo excepturi adipisci culpa. Iure, repellat. Eaque autem
        doloremque assumenda accusamus excepturi.
      </p>
      <MyTabs/>
    </div>
  );
};

export default ContactPage;
