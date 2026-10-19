'use client'
import { useState } from 'react'
import { AccordionPanel } from "@/src/components/ui/AccordionPanel";


const EditingServices: React.FC = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0)
    
      return (
        <div className="my-45 max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-16 font-[bungee] text-brand-base tracking-wide text-center text-shadow-md">Editing Services</h1>
          <div className="w-full px-10">
            <div className="bg-brand-base/5 p-6 rounded-lg shadow-md pl-10">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold my-5 text-brand-base font-[Montserrat] text-left text-shadow-md">Dissertations | Manuscripts | Essays | Articles</h2>
            </div>
          <div className="md:flex justify-between items-start w-full mb-4 mt-20">
            <div>
              {/* <h3 className="text-2xl font-extrabold mb-4 text-brand-base font-[Montserrat]">Selected Funded Projects</h3> */}
              <div className="text-md text-brand-base/90 font-[Montserrat] text-left mb-4 divide-y-22 divide-white">
                  <p>Along with editing dissertations and theses, I have edited many manuscripts that have gone on to become published journal articles, textbooks, and novels.</p>

                    <p>I offer four types of editing that support writing at different stages: <strong>structural editing, line editing, copyediting, and proofreading.</strong></p>

                    <p>Most projects benefit from more than one level of editing. During a free consultation, we can determine which service will best support your work and your goals. </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg rounded-xl bg-brand-base/5 divide-y divide-brand-base/10 md:ml-5 p-3 shadow-md">
      
    <AccordionPanel
        index={0}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Structural/Developmental Editing"
        subtext="Focuses on the big picture and overall coherence."
        listitems={[
          "Clarifies and strengthens the central argument or purpose",
          "Identifies gaps, redundancies, or unsupported claims",
          "Improves organization at the level of sections and chapters",
          "Refines flow and transitions between ideas",
          "Flags structural, citation, or formatting issues tied to submission requirements"
        ]}
        bestFor="dissertations, theses, manuscripts, early or mid-stage drafts"
      />

      <AccordionPanel
        index={1}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Line Editing"
        subtext="Focuses on  how the writing moves in terms of clarity, flow, and voice at the sentence level."
        listitems={[
          "Refines sentence structure for clarity and readability",
          "Improves rhythm, tone, and paragraph flow",
          "Strengthens transitions and emphasis within sections",
          "Reduces repetition and awkward phrasing",
          "Preserves the author’s voice and stylistic intent"
        ]}
        bestFor="essays, manuscripts, polished drafts needing refinement"
      >
      </AccordionPanel>

      <AccordionPanel
        index={2}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Copyediting"
        subtext="Focuses on correctness, consistency, and formal standards."
        listitems={[
          "Corrects grammar, punctuation, spelling, and syntax",
          "Ensures consistency in terminology and style",
          "Applies citation styles (APA, MLA, Chicago, etc.)",
          "Standardizes formatting, headings, and references",
          "Flags minor clarity or factual issues"
        ]}
        bestFor="journal submissions, reports, near-final academic writing"
      >
      </AccordionPanel>

      <AccordionPanel
        index={3}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Proofreading"
        subtext="Focuses on the final check, catching surface-level errors once the text is finished."
        listitems={[
          "Catches remaining typos and minor errors",
          "Checks spacing, layout, and formatting consistency",
          "Reviews headings, captions, and reference lists",
          "Ensures clean presentation for submission or publication",
          "Confirms no new errors were introduced during revision"
        ]}
        bestFor="final drafts ready for submission or publication"
      >
      </AccordionPanel>
          </div>
          </div>
          </div>
        </div>
      );
}

export default EditingServices