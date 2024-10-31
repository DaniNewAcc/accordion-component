import { createContext, ReactNode, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import AccordionTrigger from './AccordionTrigger';

type AccordionProps = {
  ariaControls: string;
  id: string;
  wrapperElement: keyof JSX.IntrinsicElements;
  className: string;
  children: ReactNode;
};

type AccordionContextProps = {
  activeItem: string | null;
  toggleAccordion: (id: string | null) => void;
};

export const AccordionContext = createContext<AccordionContextProps | null>(
  null
);

export default function Accordion({
  ariaControls,
  id,
  wrapperElement,
  className,
  children
}: AccordionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  function toggleAccordion(id: string | null) {
    setActiveItem(prev => (prev === id ? null : id));
  }

  const WrapperType = wrapperElement;

  const contextValue = {
    activeItem: activeItem,
    toggleAccordion
  };

  const isOpen = activeItem === id;

  return (
    <AccordionContext.Provider value={contextValue}>
      <WrapperType
        aria-controls={ariaControls}
        aria-expanded={isOpen ? true : false}
        aria-label={isOpen ? 'Show' : 'Hide'}
        className={className}
      >
        {children}
      </WrapperType>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
