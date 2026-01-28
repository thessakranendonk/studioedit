export interface ServiceBlockProps {
    title: string
    subtext?: string
    items?: Record<string, string[]>
    itemsNoKey?: Record<string, string[]>
    starting_rate?: string
    final_rate?:string
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, subtext, items, itemsNoKey, starting_rate, final_rate }) => {
  return (
    <div className="container flex flex-col justify-between mx-auto mt-15 px-10 bg-linear-to-r from-emerald-900/10 via-brand-lighter/5 to-emerald-900/10 bg-opacity-10 p-8 rounded-lg shadow-lg border-1 border-brand-base/10 hover:shadow-2xl transition-shadow duration-300"> 
        <div>
          <h2 className="text-brand-base text-4xl font-semibold text-shadow-lg pb-4 text-center tracking-wider underline underline-offset-4">{title}</h2>
          <p className="text-md mb-6 text-center">{subtext}</p>
          <div>
          {items && Object.entries(items).map(([section, points]) => (
            <div key={section} className="mt-5">
              <h3 className="text-lg font-semibold text-brand-base mb-3">{section}</h3>    
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="list-disc list-outside ml-6 text-brand-base">{point}</li>    
                ))}
              </ul>
            </div>    
          ))}
          </div>
   
   <div>
          {itemsNoKey && Object.entries(itemsNoKey).map(([section, points]) => (
            <div key={section} className="mt-5">
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="relative flex-col list-disc list-outside ml-6 text-brand-base"><p className="text-md font-semibold text-brand-base">{section}:</p>{point}</li>    
                ))}
              </ul>
            </div>    
          ))}
          </div>
          
          
     </div>
        {starting_rate && <div className="text-brand-darkest text-md font-semibold pb-4 mt-10 text-center">
          <p>Rates:</p>
          <p>Starting at {starting_rate}</p>
          <p>{final_rate}</p>
        </div>}
    </div>
  
  );
}

  export default ServiceBlock;