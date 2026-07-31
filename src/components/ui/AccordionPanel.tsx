import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown   } from 'react-icons/fa'

/* =========================
   Types
========================= */

export interface AccordionPanelProps {
  title: string
  subtext?: string
  listitems?: string[]
  index: number
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
}

interface AccordionPanelBodyProps {
  title: string
  open: boolean
  onToggle: () => void
}

/* =========================
   AccordionPanelBody
========================= */

export const AccordionPanelBody: React.FC<
  PropsWithChildren<AccordionPanelBodyProps>
> = ({ title, open, onToggle, children }) => {
  const cleanupRef = useRef<(() => void) | null>(null)
  const [contentHeight, setContentHeight] = useState(0)

  const callbackRef = useCallback((node: HTMLDivElement | null) => {
    if (cleanupRef.current) cleanupRef.current()

    if (node) {
      const observer = new ResizeObserver(([entry]) => {
        requestAnimationFrame(() => {
          setContentHeight(entry.target.getBoundingClientRect().height)
        })
      })

      observer.observe(node)
      cleanupRef.current = () => observer.disconnect()
    }
  }, [])

  useEffect(() => () => cleanupRef.current?.(), [])

const expand = useSpring({
  height: open ? contentHeight : 0,
  opacity: open ? 1 : 0,           // subtle fade for smoother feel
  config: { tension: 250, friction: 25 }, // softer spring
  marginTop: open ? 5 : 0,
  marginBottom: open ? 10 : 0,
  transform: open ? 'translateY(0px)' : 'translateY(-5px)',

})

const verticalBar = useSpring({
  transform: open ? 'scaleY(0)' : 'scaleY(1)',
  opacity: open ? 0 : 1,
  config: { tension: 260, friction: 18 },
})

  return (
    <div>
      {/* NORMAL BUTTON — NOT Disclosure.Button */}
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          'flex justify-between items-center w-full px-4 py-3 group text-left',
        'font-bold font-[Montserrat] leading-none',
        'text-white text-2xl',
        open ? 'bg-brand-base/8 rounded-md' : '',
        )}
      >
        <span className="text-[21px] font-bold text-brand-base hover:text-brand-base/80">{title}</span>

<div className="relative w-5 h-5">
  {/* horizontal bar (always visible) */}
  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-base/40 -translate-y-1/2" />

  {/* vertical bar (animates in/out) */}
  <animated.div
    style={verticalBar}
    className="absolute left-1/2 top-0 h-full w-[2px] bg-brand-base/40 -translate-x-1/2 origin-center"
  />
</div>

      </button>

      {open && (
  <animated.div 
  style={{
    ...expand,
    overflow: 'hidden',
  }}
  >
    <div
      ref={callbackRef}
      className="accordion-body bg-white px-4 pt-4 pb-2 font-[Montserrat] text-brand-base/90 text-md rounded-md"
    >
      {children}
    </div>
  </animated.div>
)}
    </div>
  )
}

/* =========================
   AccordionPanel
========================= */

export const AccordionPanel: React.FC<
  PropsWithChildren<AccordionPanelProps>
> = ({
  title,
  subtext,
  listitems,
  index,
  openIndex,
  setOpenIndex,
  children,
}) => {
  const isOpen = openIndex === index

  return (
    <div className="accordion gap-2">
      <AccordionPanelBody
        title={title}
        open={isOpen}
        onToggle={() =>
            setOpenIndex(isOpen ? null : index)
          }
      >
        {subtext && <p className="text-sm text-brand-base/90"><i>{subtext}</i></p>}

        {listitems && (
          <ul className="list-disc list-outside text-md pl-4 mt-4 mb-4 rounded-md">
            {listitems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {children}
      </AccordionPanelBody>
    </div>
  )
}
