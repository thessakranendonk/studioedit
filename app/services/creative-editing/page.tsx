'use client';
import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import SyntaxLink from "@/src/components/ui/inputs/SyntaxLink";
import ServiceHeading from "@/src/components/ui/ServiceHeading";
import ServiceSection from "@/src/components/ui/ServiceSection";
import { SERVICES } from "@/src/data/data";
import { slideInRightSlow, slideInUpSoft } from "@/src/styles/animations";

const CreativeEditing: React.FC = () => {  
    return (
        <div>
            {/* HEADING */}
             <ServiceHeading title="Creative Editing" slogan={SERVICES.creative_editing.slogan} />

            {/* CREATIVE WRITING */}
            <ServiceSection 
        title={SERVICES.creative_editing.creative_writing.title}
         id="creative-editing"
        subtext={SERVICES.creative_editing.creative_writing.subtext}
        items={SERVICES.creative_editing.creative_writing.items}
        animation={slideInRightSlow}
        imageUrl="bg-[url('/images/books-plant.jpg')] bg-bottom"
        imgLocation="left"
        imageHeight="h-200">
         </ServiceSection>

         {/* REQUEST QUOTE BUTTON */}
      <AnimateOnScroll customVariants={slideInUpSoft}>
        <div className="flex justify-center my-20">
          <SyntaxLink content="REQUEST QUOTE" href="/request-quote" extraClassName="py-4 px-6">
            Request Quote
          </SyntaxLink>
        </div>
      </AnimateOnScroll>
         </div>
    );
};
  
export default CreativeEditing;