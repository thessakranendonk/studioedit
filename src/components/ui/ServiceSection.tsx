import clsx from "clsx";
import AnimateOnScroll from "../AnimateOnScroll";

export interface ServiceSectionProps {
    title: string
    subtext?: string
    items: Record<string, string[]>
    animation?: any
    id?: string
    imageUrl?: string
    imgLocation?: 'left' | 'right'
    imageHeight?: string
    children?: React.ReactNode | any
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, subtext, items, animation, id, imageUrl, imgLocation, imageHeight, children }) => {
  return (
<AnimateOnScroll customVariants={animation}>
        <div
          id={id}
          className="grid md:grid-cols-2 lg:w-screen mx-auto mt-10 text-brand-base mb-10 bg-zinc-200/30"
        >
            { imgLocation === 'left' && 
              <div className={clsx("md:w-full mx-auto bg-cover bg-no-repeat", imageUrl, imageHeight)} />
            }

          <div>
            <h2 className="text-4xl text-center font-semibold tracking-wider text-brand-base text-shadow-sm pt-20">
              {title}
            </h2>

            <p className="md:max-w-xl mx-auto text-brand-base pt-5 text-center">
              {subtext}
            </p>

            {Object.entries(
              items
            ).map(([section, points]) => (
              <div key={section} className="mt-5 pl-30">
                <h3 className="text-lg font-semibold text-brand-darkest mb-3">
                  {section}
                </h3>
                <ul>
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="list-disc list-outside mx-6 text-brand-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            { imgLocation === 'right' &&
          <div className={clsx("md:w-full mx-auto bg-cover bg-no-repeat", imageUrl, imageHeight)} />
            }
          </div>
      </AnimateOnScroll>
    );
};
export default ServiceSection;