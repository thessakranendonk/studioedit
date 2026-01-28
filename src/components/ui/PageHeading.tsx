const PageHeading = ({ heading, extraClassName }: { heading: string; extraClassName?: string }) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className={`text-5xl font-semibold text-brand-base tracking-normal font-[Bungee] my-10 ${extraClassName || ''}`}>{heading}</h1>
    </div>
    )}

export default PageHeading;