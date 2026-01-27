'use client';
import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import SyntaxLink from '@/src/components/ui/inputs/SyntaxLink';
import { slowFadeIn, fadeIn, slideInUpSoft, slideInLeftSlow, slideInRightSlow } from '@/src/styles/animations';


const MyPhilosophy: React.FC = () => {
  return (

    <div className='flex flex-col mt-30 max-w-7xl mx-auto'>
      <div className='flex gap-8 bg-brand-base/5 inset-shadow-brand-base p-10 rounded-lg mb-15'>
      <AnimateOnScroll customVariants={fadeIn}>
      <h1 className='text-5xl font-semibold text-brand-base text-right  mt-10 font-[Bungee]'>Judy Ehrentraut pHd</h1>
         </AnimateOnScroll>
          <AnimateOnScroll
                  customVariants={{
                    ...slideInUpSoft,
                    visible: {
                      ...slideInUpSoft.visible,
                      transition: {
                        ...slideInUpSoft.visible.transition,
                        delay: 2.5,
                        duration: 1
                      }
                    }
                  }}
                >
         <p className="mb-3 mt-10 text-lg text-brand-base leading-7">
            <b><i>"Editing isn’t just about fixing errors, it’s about developing writers."</i></b><br></br>I approach every project as a collaboration: you bring your ideas, and I help you express them in their clearest, strongest form. Whether you’re preparing a dissertation, a grant proposal, or a short story, you’ll receive <i>thoughtful, individualized feedback</i>  designed to polish your current project and <i>help you grow as a writer.</i>    
        </p>
        </AnimateOnScroll>
      </div>
    

<div className="grid grid-cols-2 gap-8">
    <AnimateOnScroll 
    customVariants={{
                    ...slideInLeftSlow,
                    visible: {
                      ...slideInLeftSlow.visible,
                      transition: {
                        ...slideInLeftSlow.visible.transition,
                        delay: 5,
                        duration: 1
                      }
                    }
                  }}
    
    >
    <h1 className="text-3xl mt-10 font-semibold tracking-widest mb-6 underline underline-offset-4">
      About Me
    </h1>
    <div className="block">
      <div className="shape-circle"></div>

      <p className="mb-3 mt-10">
                    I have been drawn to reading and writing from an early age, a passion that shaped my commitment to clear expression and critical thinking. I earned a BA (Honours) in English Literature from the University of Toronto, an MA in English Literature from Carleton University, and a PhD in English and Digital Design from the University of Waterloo. Throughout graduate school, I worked as a private tutor and later spent six years teaching academic writing and media and literature courses at the University of Waterloo.<br></br><br></br> <br></br>For over a decade, I have provided grant writing support to start-up companies and helped  teams secure development and production funding by translating their ideas into clear, compelling proposals. I have also offered content creation and concept development, experiences that inform the collaborative, holistic approach I bring to editing.       

      </p>
    </div>
  </AnimateOnScroll>
<AnimateOnScroll 
    customVariants={{
                    ...slideInRightSlow,
                    visible: {
                      ...slideInRightSlow.visible,
                      transition: {
                        ...slideInRightSlow.visible.transition,
                        delay: 5,
                        duration: 1
                      }
                    }
                  }}
    
   extraClassName='ml-4'>
<h1 className="text-3xl mt-10 font-semibold tracking-widest mb-6 underline underline-offset-4">Areas of Expertise</h1>
         <p className="text-md mt-10">I help writers, researchers, and students present their work with clarity, precision, and confidence. I’m not an editing mill — I work directly with every client myself. That means communication and edits tailored to your goals, discipline, and writing voice.
      </p>
       <p className="text-md py-6" >My editorial practice is informed by teaching and research in:</p>
       <ul className="list-disc list-inside text-md text-left md:pl-38 lg:pl-20">
         <li>English literature & literary theory</li>
        <li>Academic writing & reading comprehension</li>
        <li>Creative writing & story development</li>
         <li>Queer theory, media studies, and social media culture</li>
       <li>Smartphone culture & digital personhood</li>
        <li>Cyborg, utopian/dystopian, and speculative literature/media</li>
        <li>Posthumanism & transhumanism</li>
         <li>Disability studies</li>
       </ul>


          </AnimateOnScroll>
    </div>
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

export default MyPhilosophy;