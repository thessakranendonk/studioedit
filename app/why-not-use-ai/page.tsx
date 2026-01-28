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
                <ServiceHeading title="Why Not Use A.I.?" />
            </AnimateOnScroll>
              <AnimateOnScroll customVariants={slowFadeIn}>
            <div className="flex max-w-5xl justify-center mx-auto  gap-8 mb-32">
          
                <ServiceBlock title="When to Use A.I.?" items={{
    "What A.I. is useful for:": [
      "Summarizing or synthesizing material when outlining.",
      "Early brainstorming and idea generation.",
      "Creating rough first drafts to overcome writer’s block.",
      "Basic grammar, spelling, or clarity checks before hiring a professional editor."
    ],
    "What A.I. tools can’t do well:": [
      "Produce reliable facts, since A.I. can create errors or “hallucinated” references.",
      "Follow journal, program, or university-specific citation rules.",
      "Maintain your unique tone or preserve individual voice.",
      "Interpret discipline-specific terminology or conceptual frameworks accurately.",
      "Distinguish between editing and ghostwriting.",
      "Provide nuanced feedback tailored to your goals, argument, or learning style."
    ]
  }}/>
         
                    <ServiceBlock title="When to Hire Me" subtext="Unlike automated tools or large editing firms, you work directly with me from start to finish. I take time to learn your project, your goals, your disciplinary context, and your writing habits so I can tailor feedback to your needs and preserve your voice. My process is transparent: I explain every edit, teach you patterns that strengthen your writing, and help you build confidence for defense, submission, or publication." 
                    itemsNoKey={{
  "Discipline-specific editing": [
    "I work fluently with theoretical frameworks, research methods, and terminology unique to your field."
  ],
  "Voice preservation": [
    "I improve clarity, structure, and flow without flattening your tone or rhetorical intent."
  ],
  "Transparent feedback": [
    "You receive clear comments and explanations for changes, so you always understand the “why.”"
  ],
  "Collaborative process": [
    "I answer questions, accept revision requests, and adjust my level of intervention—from light copyediting to in-depth developmental editing."
  ],
  "Neurodivergent strengths": [
    "My pattern recognition and attention to structural consistency help me spot redundancies, logic gaps, and stylistic issues that many editors (and all AI tools) miss."
  ]
}
  }/>
      
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