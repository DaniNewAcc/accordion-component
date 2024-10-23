import { ReactNode } from 'react';

type WrapperProps = {
  wrapperElement: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

function Wrapper({
  wrapperElement,
  className,
  children
}: WrapperProps) {
  const WrapperType = wrapperElement;
  return <WrapperType className={className}>{children}</WrapperType>;
}

export default Wrapper;
