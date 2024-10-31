import { ReactNode } from 'react';
import useAccordionContext from '../hooks/useAccordionContext';
import useAccordionItemContext from '../hooks/useAccordionItemContext';

type AccordionContentProps = {
  wrapperElement: keyof JSX.IntrinsicElements;
  ariaControls: string;
  className: string;
  children: ReactNode;
};

export default function AccordionContent({
  wrapperElement,
  ariaControls,
  className,
  children
}: AccordionContentProps) {
  const { activeItem } = useAccordionContext();
  const { id } = useAccordionItemContext()
  const isOpen = activeItem === id;
  const WrapperType = wrapperElement;
  return (
    <WrapperType
      id={ariaControls}
      className={
        isOpen
          ? `${className ?? ''} max-h-none opacity-100`
          : `${className ?? ''} max-h-0 opacity-0`
      }
    >
      {children}
    </WrapperType>
  );
}
