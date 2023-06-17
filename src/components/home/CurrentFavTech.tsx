"use client";

import { motion } from "framer-motion";
import AnimationContainer from "../AnimationContainer";
import TypeScript from "../ui/icons/TypeScript";
import React from "../ui/icons/React";
import Next from "../ui/icons/Next";
import TailwindCSS from "../ui/icons/TailwindCSS";
import Node from "../ui/icons/Node";

const animation = { hide: { x: -8, opacity: 0 }, show: { x: 0, opacity: 1 } };

const CurrentFavTech = ({ icons }: { icons: string[] }) => {
  return (
    <AnimationContainer customClassName="flex flex-col justify-center items-center lg:items-start mb-16 mx-auto lg:mx-0">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <motion.p
          className="text-base text-center lg:text-start mb-2.5 text-gray-400"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.6 }}
        >
          Current favorite tech stack/tools:
        </motion.p>
        <motion.ul
          className="flex items-center flex-wrap gap-3.5 text-gray-400"
          initial="hide"
          animate="show"
          transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        >
          {icons.map((icon, i) => (
            <motion.li
              key={i}
              style={{ opacity: 1, transform: "none" }}
              variants={animation}
            >
              {getIcon(icon)}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </AnimationContainer>
  );
};

export default CurrentFavTech;

function getIcon(icon: string) {
  if (icon === "typescript")
    return (
      <TypeScript className="transition duration-200 hover:text-[#3178C6] h-6 w-6" />
    );

  if (icon === "react")
    return (
      <React className="transition duration-200 hover:text-[#61DAFB] h-6 w-6" />
    );

  if (icon === "next")
    return (
      <Next className="transition duration-200 hover:text-[#FFFFFF] h-6 w-6" />
    );
  if (icon === "tailwindcss")
    return (
      <TailwindCSS className="transition duration-200 hover:text-[#06B6D4] h-6 w-6" />
    );

  if (icon === "node")
    return (
      <Node className="transition duration-200 hover:text-[#8cc84b] h-6 w-6" />
    );
}
