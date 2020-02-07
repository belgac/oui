import React, { Ref, PropsWithChildren } from "react";
import clsx, { ClassValue } from "clsx";

export type DivProps = {
  innerRef?: Ref<HTMLDivElement>;
  className?: ClassValue | ClassValue[];
};

const Div = ({
  innerRef,
  className: clsxClassName,
  children
}: PropsWithChildren<DivProps>) => {
  const className = clsx(clsxClassName);
  return (
    <div ref={innerRef} className={className}>
      {children}
    </div>
  );
};

export default Div;
