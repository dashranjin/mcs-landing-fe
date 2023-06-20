import { States } from "@/lib/context/stateContext";
import { motion } from "framer-motion";
import React, { MouseEventHandler } from "react";

function Transition({
  children,
  layout = false,
  className,
  distance = 500,
  durationIn,
  durationOut,
  onClick,
}: {
  children: any;
  layout?: boolean;
  className?: string;
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  // const {
  //   children,
  //   layout = false,
  //   className,
  //   // direction = "none",
  //   distance = 500,
  //   durationIn,
  //   durationOut,
  //   HandleClick,
  // } = props;
  const directions: any = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
    none: { x: 0, y: 0 },
  };
  const { direction } = States();
  const transitionIn = {
    type: "",
    duration: 0.3,
  };
  const animationConfig = {
    in: {
      opacity: 0,
      ...directions[direction],
    },
    animate: {
      opacity: 1,
      ...directions.none,
      transition: {
        x: transitionIn,
        y: transitionIn,
      },
    },
    out: {
      opacity: 0,
      ...directions[direction],
      transition: {
        type: "",
        stiffness: 500,
        damping: 50,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      key={direction}
      layout={layout}
      className={className}
      variants={animationConfig}
      initial="in"
      animate="animate"
      exit="out"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
