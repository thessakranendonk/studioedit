'use client'
import { useState } from 'react'
import { AccordionPanel } from "@/src/components/ui/AccordionPanel";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const WritingServices: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mt-45 max-w-7xl mx-auto px-4">
      <h1 className="text-6xl font-bold mb-16 font-[bungee] text-brand-base tracking-wide text-center text-shadow-md">Writing Services</h1>
      <div className="w-full px-10">
        <div className="bg-brand-base/5 p-6 rounded-lg shadow-md pl-10">
        <h2 className="text-5xl font-extrabold my-5 text-brand-base font-[Montserrat] text-left text-shadow-md">Grants</h2>
        <p className="text-md text-brand-base/80 font-[Montserrat] text-left mb-5 w-[70%]"><i>
          Grant writing is a multi-step process that integrates research, writing, and revision. I can work independently or in collaboration with project teams. During a free consultation, we can discuss your timeline and research requirements based on the funder and proposal type.
        </i></p>
        </div>
      <div className="flex justify-between items-start w-full mb-4 mt-20">
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-brand-base font-[Montserrat]">Selected Funded Projects</h3>
          <div className="text-md text-brand-base/90 font-[Montserrat] text-left mb-4">
              <p><strong>Mitacs</strong> — Accelerate Postdoctoral Fellowship<br></br>
              <em>Flow Weaver VR Synchronization Project (Stitch Media / The Games Institute)</em></p>

              <p className="mt-4"><strong>Mitacs</strong> — Accelerate Matching Fund<br></br>
              <em>The Future of Learning Initiative (Deloitte)</em></p>

              <p><em>Role:</em> lead writing, research, proposal development, drafting, revision, and submission</p>

              <p className="mt-4"><strong>Canada Media Fund</strong> — Iteration Program<br></br>
              <em>Sucronomicon — commercial VR game (Red Meat Games)</em></p>

              <p className="mt-4"><strong>OMDC Interactive Digital Media Fund</strong> — Concept Definition<br></br>
              <em>Bring to Light — commercial VR game (Red Meat Games)</em></p>

              <p className="mt-4"><strong>Canada Media Fund</strong> — Production<br></br>
              <em>First Impact: Rise of a Hero — commercial VR game (Red Meat Games)</em></p>

              <p><em>Role:</em> collaborative writing, drafting, revision, and final editing</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-lg rounded-xl bg-brand-base/5 divide-y divide-brand-base/10 ml-5 p-3 shadow-md">
      <AccordionPanel
        index={0}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Research & Proposal Development"
        subtext="Focuses on strategic context and funder alignment."
        listitems={[
          "Reviews funder priorities, mission, and past awards",
          "Identifies relevant trends, gaps, and best practices (environmental scan)",
          "Clarifies the problem statement, objectives, and scope",
          "Develops overall proposal structure and narrative flow",
          "Aligns approach, methods, and anticipated outcomes"
        ]}
      />

      <AccordionPanel
        index={1}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Writing & Persuasive Framing"
        subtext="Focuses on clarity and reviewer-centered argument."
        listitems={[
          "Drafts and revises proposal sections as needed",
          "Refines rationale, significance, and demonstrated need",
          "Aligns language with funder priorities and evaluation criteria",
          "Clarifies outcomes, deliverables, and broader impacts",
          "Strengthens summaries and key persuasive sections"
        ]}
      >
      </AccordionPanel>

      <AccordionPanel
        index={2}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Technical Editing & Formatting"
        subtext="Focuses on precision and submission readiness."
        listitems={[
          "Improves sentence-level clarity, tone, and consistency",
          "Refines budgets, timelines, and work plans for coherence",
          "Ensures consistent terminology and professional register",
          "Confirms compliance with guidelines, templates, and limits",
          "Reviews formatting, headings, and supporting materials"
        ]}
      >
      </AccordionPanel>

      </div>
      </div>
      </div>


      <div className="w-full px-10 mb-45">
        <p className="text-2xl font-extrabold text-brand-base/50 my-20 text-center">-----------</p>
        <div className="bg-brand-base/5 p-6 rounded-lg shadow-md pl-10">
        <h2 className="text-5xl font-extrabold my-5 text-brand-base font-[Montserrat] text-left text-shadow-md">Presentations & Speeches</h2>
        <p className="text-md text-brand-base/80 font-[Montserrat] text-left mb-5 w-[70%]"><i>
I research and write presentations and speeches on behalf of individuals and organizations. This service includes content and delivery, not visual design. During a free consultation, we can determine scope, audience, and collaboration level.        </i></p>
        </div>
      <div className="flex justify-between items-start w-full mb-4 mt-20">
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-brand-base font-[Montserrat]">Selected Presentations</h3>
          <div className="text-md text-brand-base/90 font-[Montserrat] text-left mb-4">
             <p>
  <strong>devcom Developer Conference (Gamescom)</strong> — Cologne, Germany<br></br>
  <em>Exploring Ethical Horizons: The Challenges of AI-Generated Art</em><br></br>
  <em>Role:</em> written and presented
</p>

<p className="mt-4">
  <strong>XP Summit, Interactive Ontario</strong> — Toronto, Canada<br></br>
  <em>Human-Centric AI and Crafting Generative Games</em><br></br>
  <em>Role:</em> written and presented
</p>

<p className="mt-4">
  <strong>Society for Literature, Science and the Arts Annual Conference</strong> — Ann Arbor, USA<br></br>
  <em>Conjuring the G(host): Mutual Isolation and the Horror of Telepresence</em><br></br>
  <em>Role:</em> written for presenter
</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-lg rounded-xl bg-brand-base/5 divide-y divide-brand-base/10 ml-5 p-3 shadow-md">
      <AccordionPanel
        index={0}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Research, Structure & Argument"
        subtext="Focuses on what the presentation is trying to say."
        listitems={[
          "Researches topic, context, and audience",
          "Clarifies the central claim and purpose of the talk",
          "Establishes a clear argument for live delivery",
          "Shapes the overall progression of ideas",
          "Strengthens openings, transitions, and conclusions"
        ]}
      />

      <AccordionPanel
        index={1}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        title="Language & Flow"
        subtext="Focuses on how the work sounds when spoken out loud."
        listitems={[
          "Writes and revises presentation notes",
          "Tightens language for clarity, emphasis, and rhythm",
          "Refines phrasing for natural, confident delivery",
          "Adapts tone and pacing to setting and audience",
          "Prepares text for live presentation"
        ]}
      >
      </AccordionPanel>

      </div>
      </div>
      </div>
    </div>
  );
};

export default WritingServices;
