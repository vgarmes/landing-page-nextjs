import React, { useContext, useRef, useCallback } from 'react';
import { SizeContext } from '../utils/size-observer';
import useAnimationFrame from '../utils/use-animation-frame';

interface Props {
  initialOffsetX: number;
  className: string;

  children: React.ReactNode;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const contentWidth = refContent?.current?.clientWidth || 0;
  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      if (refContainer?.current && refContent?.current) {
        refScrollX.current += 0.5;
        refContainer.current.scrollLeft = refScrollX.current;
        if (refContainer.current.scrollLeft >= refContent.current.clientWidth) {
          refScrollX.current = 0;
          refContainer.current.scrollLeft = 0;
        }
      }
    }, [])
  );
  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={enabled ? 'inline-block' : 'hidden'}>{children}</div>
    </div>
  );
};

interface SliderItemProps {
  children: React.ReactNode;
  width: number;
}

export const SliderItem: React.FC<SliderItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);

export default SliderContainer;
