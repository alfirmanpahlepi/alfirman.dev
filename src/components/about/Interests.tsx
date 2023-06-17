import AnimationContainer from "../AnimationContainer";

const Interests = ({ interest }: { interest: string }) => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
        Interests
      </h2>

      <p className="text-base text-gray-400">{interest}</p>
    </AnimationContainer>
  );
};

export default Interests;
