import { ReactNode, useState } from 'react';
import AccordionTrigger from './ui/Wrapper';
import AccordionHeader from './ui/Wrapper';

type AccordionProps = {
  ariaControls: string;
  wrapperClasses: string;
  headerClasses: string;
  titleClasses: string;
  triggerClasses: string;
  contentWrapperClasses: string;
  contentClasses: string;
  title: string;
  children: ReactNode;
};

function Accordion({
  ariaControls,
  wrapperClasses,
  headerClasses,
  titleClasses,
  triggerClasses,
  contentWrapperClasses,
  contentClasses,
  title,
  children
}: AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prev => !prev);
  };

  if (isActive) {
    contentWrapperClasses += ' max-h-none opacity-100';
  } else {
    contentWrapperClasses += ' max-h-0 opacity-0';
  }

  return (
    <>
      <div
        aria-controls={ariaControls}
        aria-expanded={isActive}
        aria-label={(isActive ? 'hide' : 'show') + ' content'}
        className={wrapperClasses}
        onClick={handleClick}
      >
        <AccordionHeader
          wrapperElement="div"
          className={headerClasses}
        >
          <p className={titleClasses}>{title}</p>
          <AccordionTrigger
            wrapperElement="button"
            className={triggerClasses}
          >
            {isActive ? 'Hide' : 'Show'}
          </AccordionTrigger>
        </AccordionHeader>
        {isActive && (
          <div id={ariaControls} className={contentWrapperClasses}>
            <p className={contentClasses}>{children}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Accordion;
