'use client'
import { useState } from 'react'
import { AccordionPanel } from "@/src/components/ui/AccordionPanel";

const WritingServices: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-30 w-[300px]">
      <div className="mb-20 last:border-b-2 border-brand-base/10">
      <AccordionPanel
        index={0}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Grant Writing"
        subtext="Focuses on clarity and reviewer-centered argument."
        listitems={[
          "Drafts and revises proposal sections as needed",
          "Refines rationale, significance, and demonstrated need",
          "Aligns language with funder priorities and evaluation criteria",
          "Clarifies outcomes, deliverables, and broader impacts",
          "Strengthens summaries and key persuasive sections"
        ]}
      />

      <AccordionPanel
        index={1}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Presentation Writing"
      >
        <p>This is the content for Writing Service 2.</p>
      </AccordionPanel>

      <AccordionPanel
        index={2}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Presentation Writing"
      >
        <p>This is the content for Writing Service 3.</p>
      </AccordionPanel>
      </div>
    </div>
  );
};

export default WritingServices;
