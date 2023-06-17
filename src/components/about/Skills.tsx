"use client";

import { Badge } from "@mantine/core";
import AnimationContainer from "../AnimationContainer";
import { SkillsProps } from "@/interfaces";

const Skills = ({ skills, paragrap1, paragrap2 }: SkillsProps) => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
        Skills and Tools
      </h2>
      <p className="text-base text-gray-400">{paragrap1}</p>
      <p className="text-base text-gray-400">{paragrap2}</p>
      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
              {title}
            </h3>
            <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
              {techs.map((tech, i) => (
                <Badge
                  key={i}
                  color="dark"
                  size="lg"
                  radius="xs"
                  variant="filled"
                >
                  {tech}
                </Badge>
              ))}
            </AnimationContainer>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default Skills;
