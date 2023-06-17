import AnimationContainer from "../AnimationContainer";

const AboutMe = ({ about }: { about: string }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">{about}</p>
    </AnimationContainer>
  );
};

export default AboutMe;
