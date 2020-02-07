import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import {
  motion,
  AnimationProps,
  MotionCallbacks,
  MotionAdvancedProps
} from "framer-motion";
import { useCurrentDuration } from "../../../cosmos/duration";
import { DivProps } from "../default";

export type AnimatedDivProps = DivProps & {
  variants?: AnimationProps["variants"];
  animate?: AnimationProps["animate"];
  exit?: AnimationProps["exit"];
  transition?: Omit<AnimationProps["transition"], "duration">;
} & MotionCallbacks &
  MotionAdvancedProps;

const AnimatedDiv = (props: PropsWithChildren<AnimatedDivProps>) => {
  const currentDuration = useCurrentDuration();
  const {
    innerRef,
    className: clsxClassName,
    children,
    animate,
    variants,
    exit = variants && variants.exit ? "exit" : undefined,
    transition: sourceTransition,
    onUpdate,
    onAnimationStart,
    onAnimationComplete,
    custom,
    inherit,
    static: isStatic
  } = props;
  const transition = {
    ...sourceTransition,
    duration: currentDuration
  };
  const className = clsx(clsxClassName);
  return (
    <motion.div
      ref={innerRef}
      className={className}
      variants={variants}
      animate={animate}
      exit={exit}
      transition={transition}
      onUpdate={onUpdate}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      custom={custom}
      inherit={inherit}
      static={isStatic}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
