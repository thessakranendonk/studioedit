export interface ServiceBlockProps {
    title: string
    subtext?: string
    items: Record<string, string[]>
    starting_rate: string
    final_rate?:string
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, subtext, items, starting_rate, final_rate }) => {
  return (
    <div className="container flex flex-col justify-between mx-auto mt-15 px-10 bg-emerald-900/80 bg-opacity-10 p-8 rounded-lg shadow-lg"> 
        <div>
          <h2 className="text-white text-4xl font-semibold pb-4 text-center tracking-wider underline underline-offset-4">{title}</h2>
          <p className="text-lg mb-6 text-center">{subtext}</p>
          <div className="">
          {Object.entries(items).map(([section, points]) => (
            <div key={section} className="mt-5">
              <h3 className="text-lg font-semibold text-white mb-3">{section}</h3>    
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="list-disc list-outside ml-6 text-white/80">{point}</li>    
                ))}
              </ul>
            </div>    
          ))}
          </div>
        </div>
    
        <div className="text-white text-md font-semibold pb-4 mt-10 text-center">
          <p>Rates:</p>
          <p>Starting at {starting_rate}</p>
          <p>{final_rate}</p>
          </div>
    </div>
  
  );
}

  export default ServiceBlock;