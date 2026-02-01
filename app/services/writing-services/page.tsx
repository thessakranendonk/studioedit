'use client';
import { AccordionPanel, AccordionPanelBody } from "@/src/components/ui/AccordionPanel";

const WritingServices: React.FC = () => {
  return (
    <div className="mt-30 w-[300px] last:border-b-2 border-brand-base/10">
        <AccordionPanel title="Grant Writing" subtext="Focuses on clarity and reviewer-centered argument." listitems={[
          "Drafts and revises proposal sections as needed",
          "Refines rationale, significance, and demonstrated need",
          "Aligns language with funder priorities and evaluation criteria",
          "Clarifies outcomes, deliverables, and broader impacts",
          "Strengthens summaries and key persuasive sections"
        ]}>
        </AccordionPanel>
        <AccordionPanel title="Presentation Writing">
          <p>This is the content for Writing Service 2.</p>
        </AccordionPanel>
        <AccordionPanel title="Presentation Writing">
          <p>This is the content for Writing Service 2.</p>
        </AccordionPanel>
    </div>
    );  

};

export default WritingServices;