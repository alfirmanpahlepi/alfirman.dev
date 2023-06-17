import TitlePage from "@/components/TitlePage";
import About from "@/components/about/About";
import CurrentTimeLineExp from "@/components/about/CurrentTimeLineExp";
import Interests from "@/components/about/Interests";
import Skills from "@/components/about/Skills";
import Data from "@/content/about.json";

export default function AboutPage() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <div className="w-full flex flex-col gap-6">
        <TitlePage title="About me" />

        <About
          paragraph1={Data.aboutParagraph1}
          paragraph2={Data.aboutParagraph2}
        />

        <CurrentTimeLineExp experience={Data.experience} />

        <Skills
          skills={Data.skills}
          paragrap1={Data.skillsParagraph1}
          paragrap2={Data.skillsParagraph2}
        />

        <Interests interest={Data.interest} />
      </div>
    </div>
  );
}
