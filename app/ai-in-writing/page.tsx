'use client';
import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import ServiceBlock from "@/src/components/ServiceBlock";
import SyntaxLink from "@/src/components/ui/inputs/SyntaxLink";
import ServiceHeading from "@/src/components/ui/ServiceHeading";
import { slideInLeftQuick, slideInUpSoft, slowFadeIn } from "@/src/styles/animations";

const WhyNotUseAI: React.FC = () => {  
    return (
        <div className="mt-30">
            <AnimateOnScroll customVariants={slideInLeftQuick}>
                <ServiceHeading title="Human Editing in an A.I. Era" />
            </AnimateOnScroll>
              <AnimateOnScroll customVariants={slowFadeIn}>
                <p className="flex max-w-5xl justify-center mx-auto text-center">A.I. tools are widely used in writing and editing, for speed and organization. While these tools can produce plausible text, they do not interpret or take responsibility for meaning. Writing with intention and voice still requires human judgment and attention.</p>
            <div className="flex max-w-5xl justify-center mx-auto  gap-8 mb-32">
          
                <ServiceBlock title="Where A.I. is Often Used" items={{
    "": [
      "Summarizing or synthesizing material while outlining",
  "Generating early ideas during brainstorming",
  "Producing rough drafts to overcome writer's block",
  "Checking basic grammar, spelling, or clarity",
  "Reorganizing existing text at a surface level"
    ]
  }}/>
         
         <ServiceBlock title="What A.I. Has Difficulty With" items={{"": [
      "Producing reliable facts with real references",
  "Following discipline-specific citation rules or guidelines",
  "Preserving the writer's tone, voice, and intent",
  "Interpreting specialized terminology or frameworks",
  "Distinguishing between editing and rewriting",
  "Providing nuanced feedback and explanation"
    ]}}/>
                    <ServiceBlock title="How I Work as an Editor" subtext="" 
items={{
    "": [
       "Editing within the conventions of specific disciplines",
  "Strengthening the clarity, structure, and flow of your writing",
  "Working with you and being transparent about ongoing revisions",
  "Identifying contextual patterns and any gaps in the argument",
  "Supporting you in developing the best version of your writing"
    ]
  }}
  />
      
            </div>
                   </AnimateOnScroll>
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
}   

export default WhyNotUseAI;