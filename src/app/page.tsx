import AboutMe from "@/components/home/AboutMe";
import ContactMe from "@/components/home/ContactMe";
import CurrentFavTech from "@/components/home/CurrentFavTech";
import CurrentTimeLineExp from "@/components/home/CurrentTimeLineExp";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <Hero />

      <CurrentFavTech />

      <div className="w-full flex flex-col items-start">
        <AboutMe />

        <CurrentTimeLineExp />

        {/* <FavProjects /> */}

        {/* <ProcessWork /> */}

        <ContactMe />
      </div>
    </div>
  );
}
