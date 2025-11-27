const PageHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-zinc-800">{heading}</h1>
    </div>
    )}

export default PageHeading;