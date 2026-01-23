import clsx from "clsx"

export interface ListProps {
  items: Array<string>
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className={clsx("mb-4")}>
            {item}
          </li>))}
    </ul>
    
  )
}