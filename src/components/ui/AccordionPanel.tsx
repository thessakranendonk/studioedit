import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import clsx from 'clsx'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { FaChevronDown } from "react-icons/fa";

export interface AccordionPanelProps {
  title: string
  subtext?: string
  listitems?: string[]
}

export interface AccordionPanelBodyProps extends AccordionPanelProps {
  open: boolean
}

/**
 * Inner AccordionPanel body with react-spring animation that responds to the `open` prop.
 */
export const AccordionPanelBody: React.FC<PropsWithChildren<AccordionPanelBodyProps>> = ({ title, open, children }) => {
  const cleanupRef = useRef<(() => void) | null>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const callbackRef = useCallback((node: HTMLDivElement) => {
    // div hidden or deps array changed so check if we need to clean up
    if (cleanupRef.current !== null) {
      cleanupRef.current()
      cleanupRef.current = null
    }

    // accordion body shown or deps array change so re-observe and reset cleanup
    if (node !== null) {
      const observer = new ResizeObserver(([entry]) => {
        requestAnimationFrame(() => {
          if (!entry) {
            return
          }
          setContentHeight(entry.target.getBoundingClientRect().height)
        })
      })

      observer.observe(node)

      // stash cleanup function in a ref for the next time this callback ref is invoked
      cleanupRef.current = () => {
        observer.disconnect()
      }
    }
  }, [])

  // not fully sure if required or not however careful cleanup can't hurt
  useEffect(() => {
    return () => {
      if (cleanupRef.current !== null) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [])

  const expand = useSpring({
    height: open ? contentHeight : 0,
    // config: { friction: 5 },
    // if we land on a good spring... opacity: open ? 1 : 0,
    config: {
      ...config.default,
    },
  })

  const spin = useSpring({
    config: { friction: 20 },
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
  })

  return (
    <div>
      <h3 className="accordion-heading not-prose text-white leading-none mt-0 mb-0">
        {/* <DisclosureButton
          className={clsx(
            'flex justify-between items-center w-full px-4 py-3 border-2 group text-left',
            'font-normal leading-none',
            'text-white border-brand-base hover:border-brand-base/10 bg-brand-lighter hover:bg-brand-lighter-outline',
            'transition-all duration-150 ease-in',
            'focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-brand-orange/20 focus-visible:border-transparent',
            open ? 'rounded-t-md' : 'rounded-md',
          )}
        >
          <span>{title}</span>
          <animated.div style={spin}>
            <FaChevronDown
              className={clsx('w-6 h-6 mt-0.5 text-brand-base/25 group-hover:text-brand-base/60', {
                // 'rotate-180': open,
                // '': !open,
              })}
            />
          </animated.div>
        </DisclosureButton>
      </h3>
      <DisclosurePanel as={animated.div} style={expand}>
        <div
          ref={callbackRef}
          className="accordion-body bg-white px-4 pt-4 pb-2 rounded-b-md border-2 border-t-0 border-brand-base/10"
        >
          {children}
        </div>
      </DisclosurePanel> */}

<DisclosureButton
          className={clsx(
            'flex justify-between items-center w-full px-4 py-3 border-t-2 group text-left',
            'font-normal hover:font-medium leading-none',
            'text-brand-base text-xl border-brand-base/10',
            'transition-all duration-150 ease-in',
            'focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-brand-base/20 focus-visible:border-transparent',
            // open ? 'rounded-t-md' : 'rounded-md',
          )}
        >
          <span>{title}</span>
          <animated.div style={spin}>
            <FaChevronDown
              className={clsx('w-6 h-6 mt-0.5 text-brand-base/25 group-hover:text-brand-base/60', {
                // 'rotate-180': open,
                // '': !open,
              })}
            />
          </animated.div>
        </DisclosureButton>
      </h3>
      <DisclosurePanel as={animated.div} style={expand}>
        <div
          ref={callbackRef}
          className="accordion-body bg-white px-4 pt-4 pb-2 rounded-b-md "
        >
          {children}
        </div>
      </DisclosurePanel>

      
    </div>
  )
}

/**
 * Animated accordion component that expands/collapses to show/hide content when the header is clicked on.
 */
export const AccordionPanel: React.FC<PropsWithChildren<AccordionPanelProps>> = ({ title, subtext, listitems, children }) => {
  return (
    <Disclosure as="div" className="accordion w-full">
      {({ open }) => (
        <AccordionPanelBody title={title} open={open}>
            <p><i>{subtext}</i></p>
            <ul className="list-disc list-inside mt-4 mb-4">
              {listitems?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          {children}
        </AccordionPanelBody>
      )}
    </Disclosure>
  )
}