import { CardCarousel } from "../components/CardCarousel";
import { SectionTitle } from "./SectionTitle";
export const Categories = () => {
  return (
    <section>
      <div>
        <SectionTitle title="Get It All Right Here "></SectionTitle>
        <div className="">
          <CardCarousel></CardCarousel>
        </div>
      </div>
    </section>
  );
};
