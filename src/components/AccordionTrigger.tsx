import { ReactNode } from 'react';
import useAccordionItemContext from '../hooks/useAccordionItemContext';
import useAccordionContext from '../hooks/useAccordionContext';

type AccordionTriggerProps = {
  wrapperElement: keyof JSX.IntrinsicElements;
  className: string;
  children?: ReactNode;
};

export default function AccordionTrigger({
  wrapperElement,
  className,
  children
}: AccordionTriggerProps) {
  const WrapperType = wrapperElement;
  const { activeItem, toggleAccordion } = useAccordionContext();
  const { id } = useAccordionItemContext();

  const isOpen = activeItem === id;
  return (
    <WrapperType className={className} onClick={() => toggleAccordion(id)}>
      <span>{!isOpen ? 'Show' : 'Hide'}</span>
      {children}
    </WrapperType>
  );
}
