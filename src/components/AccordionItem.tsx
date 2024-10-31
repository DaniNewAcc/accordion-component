import { createContext, ReactNode } from 'react';

type AccordionItemProps = {
  id: string;
  wrapperElement: keyof JSX.IntrinsicElements;
  className: string;
  children: ReactNode;
};

type AccordionItemContextProps = {
  id: string | null;
};

export const AccordionItemContext =
  createContext<AccordionItemContextProps | null>(null);

export default function AccordionItem({
  id,
  wrapperElement,
  className,
  children
}: AccordionItemProps) {
  const WrapperType = wrapperElement;

  const contextValue = {
    id
  };
  return (
    <AccordionItemContext.Provider value={contextValue}>
      <WrapperType id={id} className={className}>
        {children}
      </WrapperType>
    </AccordionItemContext.Provider>
  );
}
