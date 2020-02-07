import React, { Attributes, PropsWithChildren } from "react";
import { AnimatePresence, MotionAdvancedProps } from "framer-motion";
import AnimatedDiv, { AnimatedDivProps } from "./default";

export type ComponentPresenceDivProps = AnimatedDivProps & {
  presenceKey: Attributes["key"];
};

export const ComponentPresenceDiv = (
  props: PropsWithChildren<ComponentPresenceDivProps>
) => {
  const {
    innerRef,
    className,
    children,
    animate,
    variants,
    exit,
    transition,
    onUpdate,
    onAnimationStart,
    onAnimationComplete,
    custom,
    inherit,
    static: isStatic,
    presenceKey
  } = props;
  return (
    <AnimatePresence custom={custom}>
      <AnimatedDiv
        key={presenceKey}
        innerRef={innerRef}
        className={className}
        variants={variants}
        animate={animate}
        exit={exit}
        onUpdate={onUpdate}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
        custom={custom}
        inherit={inherit}
        static={isStatic}
        transition={transition}
      >
        {children}
      </AnimatedDiv>
    </AnimatePresence>
  );
};

type ChildPresenceDiv = AnimatedDivProps & {
  presenceCustom: MotionAdvancedProps["custom"];
};

export const ChildPresenceDiv = (
  props: PropsWithChildren<ChildPresenceDiv>
) => {
  const {
    innerRef,
    className,
    children,
    animate,
    variants,
    exit,
    transition,
    onUpdate,
    onAnimationStart,
    onAnimationComplete,
    custom,
    inherit,
    static: isStatic,
    presenceCustom
  } = props;
  return (
    <AnimatedDiv
      innerRef={innerRef}
      className={className}
      variants={variants}
      animate={animate}
      exit={exit}
      onUpdate={onUpdate}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      custom={custom}
      inherit={inherit}
      static={isStatic}
      transition={transition}
    >
      <AnimatePresence custom={presenceCustom}>{children}</AnimatePresence>
    </AnimatedDiv>
  );
};

export default ComponentPresenceDiv;
