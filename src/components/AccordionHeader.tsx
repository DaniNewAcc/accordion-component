import { ReactNode } from 'react';
import useAccordionContext from '../hooks/useAccordionContext';
import useAccordionItemContext from '../hooks/useAccordionItemContext';

type AccordionHeaderProps = {
  wrapperElement: keyof JSX.IntrinsicElements;
  className: string;
  title: string;
  children: ReactNode;
};

export default function AccordionHeader({
  wrapperElement,
  className,
  title,
  children
}: AccordionHeaderProps) {
  const { toggleAccordion } = useAccordionContext();
  const { id } = useAccordionItemContext()
  const WrapperType = wrapperElement;
  return (
    <WrapperType className={className}>
      <h3 onClick={() => toggleAccordion(id)}>{title}</h3>
      {children}
    </WrapperType>
  );
}
