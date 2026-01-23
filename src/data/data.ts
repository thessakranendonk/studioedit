import { title } from "process";

export const CONTACT_DETAILS = {
  contact_name: "Syntax Studio",
  location: "Hamilton, Ontario",
  address: "Hamilton, Ontario",
  phone: "",
  email: "judy@syntaxstudioedit.com",
};


export const SERVICES ={
  academic_editing: {
    slogan: "Get the right level of academic editing for your needs, from structural support to final polish",
    copyediting_proofreading: {
      subtext: "Ideal for drafts that are structurally complete but need polish to read smoothly and clearly. This level ensures your writing is error-free,  clear, precise, and ready for submission or publication.",
      items: {
          "Clarity & Flow": [
            "Refine sentence structure, clarity, and flow for better readability"
          ],
          "Grammar & Mechanics": [
            "Correct grammar, punctuation, spelling, and typos"
          ],
          "Consistency & Style": [
            "Ensure consistent tone, style, and terminology throughout"
          ],
          "Formatting & Style": [
            "Apply light formatting adjustments (headings, bullets, minor layout issues)"
          ],
          "Final Quality Check": [
            "Final quality check to catch overlooked errors before submission"
          ]
        },
      starting_rate: "$0.05 per word or $55/hour",
      final_pricing: ""
    },
    structural_developmental: {
      subtext: "Ideal for early or mid-stage drafts or for writers seeking support with overall structure and coherence. Deep, conceptual editing to develop and strengthen your argument, organization, and clarity.",
      starting_rate: "$0.03 per word or $40/hour",
      final_rate: ""
    },
  },
  professional_editing: {
    slogan: "Clear, persuasive, and polished writing for real-world impact",
    presentations_speeches: {
      title: "Presentations & Speeches",
      subtext: "",
      items: {
            "Professional Development": [
              "Streamlining structure and narrative flow for a clear, engaging progression",
              "Enhancing hooks, transitions, and conclusions for maximum impact"
            ],
            "Tone, Delivery & Audience Engagement": [
              "Sharpening tone and pacing for natural, impactful delivery",
              "Clarifying key ideas and enhancing emotional and pivotal moments"
            ],
            "Persuasive Messaging & Strategic Positioning": [
              "Refining core message, value proposition, and call to action",
              "Ensuring alignment with organizational goals, brand voice, and audience expectations"
            ],
            "Language, Clarity & Focus": [
              "Tightening language for focus, clarity, and memorability",
              "Simplifying complex ideas and refining notes, slides, and scripts for confident delivery"
            ]
          },
      starting_rate: "$40/hour",
      final_rate: "Final pricing depends on length, audience, and level of collaboration."
  },
    grant_writing: {
      title: "Grant Writing",
      subtext: "",
      items: {
            "Structural Editing": [
              "Strengthening proposal structure, flow, and narrative coherence",
              "Clarifying objectives, methods, outcomes, and emphasizing innovation and impact"
            ],
            "Persuasive Framing": [
              "Clarifying the problem statement, demonstrated need, and funder-aligned priorities",
              "Refining outcomes, deliverables, and benefits for clarity and impact"
            ],
            "Research & Environmental Scan": [
              "Reviewing funder priorities, past awards, and strategic alignment",
              "Positioning the proposal within trends, gaps, and best practices to strengthen competitiveness"
            ],
            "Technical & Language Editing": [
              "Clear, precise sentence-level editing to improve readability and maintain authority",
              "Refining budgets, timelines, and work plans for clarity and consistency"
            ],
            "Formatting & Compliance": [
              "Ensuring compliance with guidelines, templates, and word/page limits",
              "Checking consistency and polishing titles, headings, summaries, and supporting materials"
            ]
          },
      starting_rate: "$800 per proposal",
      final_rate: "Final pricing depends on scope, timeline, and level of research."
  }},
  creative_editing: {
    slogan: "Polish your fiction, nonfiction, or script with clearer structure, stronger voice, and greater reader impact",
    creative_writing: {
      starting_rate: "$0.05/word or $55/hour",
      final_rate: "Final pricing depends on scope, genre, and level of collaboration."
  }}
}