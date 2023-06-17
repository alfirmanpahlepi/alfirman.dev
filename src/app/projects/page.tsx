import TitlePage from "@/components/TitlePage";

export default function ProjectPage() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <div className="w-full flex flex-col items-center gap-6 min-h-screen">
        <TitlePage title="Coming soon..." />
      </div>
    </div>
  );
}
