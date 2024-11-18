import { testimonials } from "@/constants/textimonials";
import { TestimonialsSlider } from "./TestimonialsSlider";

export const Testimonials = () => {
  return (
    <section>
      <h2 className="title-section">Отзывы</h2>
      <TestimonialsSlider testimonials={testimonials} />
    </section>
  );
};
