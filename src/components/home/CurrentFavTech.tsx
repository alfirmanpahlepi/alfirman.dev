import AnimationContainer from "../AnimationContainer";
import AllFavTechs from "../icons/AllFavTechs";

const CurrentFavTech = () => {
  return (
    <AnimationContainer customClassName="flex flex-col justify-center items-center lg:items-start mb-16 mx-auto lg:mx-0">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <AllFavTechs />
      </div>
    </AnimationContainer>
  );
};

export default CurrentFavTech;
