import Judy from '@/public/images/Judy.webp'
import beehive from '@/public/images/beehive.png'
import clsx from 'clsx'

const MyPhilosophy: React.FC = () => {
  return (
    <div className="pt-32 container mx-auto mt-10 text-center mb-25">
      <div>
        <h1 className="text-3xl font-semibold tracking-widest text-brand-base mb-6">My Philosophy</h1>
        <div className="mx-auto px-6 lg:px-0 lg:w-3/4">            
          {/* <img src={Judy.src} alt="Judy" className="hexagon md:col-span-1 flex-1 mx-auto w-45 h-45 lg:w-35 lg:h-40 mb-10 md:mr-10 object-cover object-[75%_25%] brightness-105 saturate-90 drop-shadow-lg" /> */}
        <p className=" md:text-center mx-auto md:mt-10 text-md text-brand-base">
        Editing isn’t just about fixing errors, it’s about developing writers. I approach every project as a collaboration: you bring your ideas, and I help you express them in their clearest, strongest form. Whether you’re preparing a dissertation, a grant proposal, or a short story, you’ll receive thoughtful, individualized feedback designed to polish your current project and help you grow as a writer.        </p>
     
        </div>
    
        <p className="my-15 text-xl text-brand-base/15">____________________________________________________________________________________________________________________</p>
      <div className={clsx("lg:grid lg:grid-flow-col lg:grid-cols-10")}>
        <div className='wrapper lg:col-span-4 flex justify-center'>
      <div className='hexagon h-180 text-center text-white'>
        <p className="hidden text-md pb-10">________________</p>
        <h1 className="text-3xl font-semibold tracking-widest pt-28 mb-6 underline underline-offset-4">About Me</h1>
        <p className="text-md mx-auto px-10 py-6">I have been drawn to reading and writing from an early age, a passion that shaped my commitment to clear expression and critical thinking. I earned a BA (Honours) in English Literature from the University of Toronto, an MA in English Literature from Carleton University, and a PhD in English and Digital Design from the University of Waterloo. Throughout graduate school, I worked as a private tutor and later spent six years teaching academic writing and media and literature courses at the University of Waterloo.
        </p>
        <p className="text-md px-10 mx-auto">For over a decade, I have provided grant writing support to start-up companies and helped  teams secure development and production funding by translating their ideas into clear, compelling proposals. I have also offered content creation and concept development, experiences that inform the collaborative, holistic approach I bring to editing.</p>
      </div>
     </div>
             <img src={Judy.src} alt="Judy" className="hexagon mt-30 lg:col-span-2 flex-1 mx-auto w-45 h-45 lg:w-100 lg:h-120 mb-10 md:mr-10 object-cover object-[75%_25%] brightness-105 saturate-90 drop-shadow-lg" />

      <div className='wrapper lg:col-span-4 flex justify-center'>
        <div className='hexagon h-180 text-center text-white'>
      <p className="lg:hidden text-md pb-10">________________</p>
        <h1 className="text-3xl pt-28 font-semibold tracking-widest mb-6 underline underline-offset-4">Areas of Expertise</h1>
        <p className="text-md px-10 py-6">I help writers, researchers, and students present their work with clarity, precision, and confidence. I’m not an editing mill — I work directly with every client myself. That means communication and edits tailored to your goals, discipline, and writing voice.
      </p>
      <p className="text-md  p-6" >My editorial practice is informed by teaching and research in:</p>
      <ul className="list-disc list-inside text-md text-left text-sm md:pl-38 lg:pl-20">
        <li>English literature & literary theory</li>
        <li>Academic writing & reading comprehension</li>
        <li>Creative writing & story development</li>
        <li>Queer theory, media studies, and social media culture</li>
        <li>Smartphone culture & digital personhood</li>
        <li>Cyborg, utopian/dystopian, and speculative literature/media</li>
        <li>Posthumanism & transhumanism</li>
        <li>Disability studies</li>
      </ul>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MyPhilosophy;