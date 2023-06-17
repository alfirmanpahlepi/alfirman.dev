import AnimationContainer from "../AnimationContainer";

const About = ({
  paragraph1,
  paragraph2,
}: {
  paragraph1: string;
  paragraph2: string;
}) => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
      <p className="text-base text-gray-400">{paragraph1}</p>
      <p className="text-base text-gray-400">{paragraph2}</p>
    </AnimationContainer>
  );
};

export default About;
