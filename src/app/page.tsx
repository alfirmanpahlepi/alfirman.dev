import AboutMe from "@/components/home/AboutMe";
import ContactMe from "@/components/home/ContactMe";
import CurrentFavTech from "@/components/home/CurrentFavTech";
import CurrentTimeLineExp from "@/components/home/CurrentTimeLineExp";
import Hero from "@/components/home/Hero";
import Data from "@/content/home.json";

export default function Home() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <Hero
        description={Data.description}
        headline={Data.headline}
        name={Data.name}
        profile_picture={Data.profile_picture}
      />

      <CurrentFavTech icons={Data.favourite_tech} />

      <div className="w-full flex flex-col items-start">
        <AboutMe about={Data.about} />

        <CurrentTimeLineExp experience={Data.experience} />

        {/* <FavProjects /> */}

        {/* <ProcessWork /> */}

        <ContactMe email={Data.email} phone={Data.phone} />
      </div>
    </div>
  );
}
