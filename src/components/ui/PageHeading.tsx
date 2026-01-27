const PageHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="text-5xl font-semibold text-brand-base tracking-normal font-[Bungee] my-10">{heading}</h1>
    </div>
    )}

export default PageHeading;