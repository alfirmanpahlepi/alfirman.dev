import Link from "next/link";
import HeaderAnimation from "@/components/header/HeaderAnimation";
import NavItem from "@/components/header/NavItem";
import MobileMenuNav from "@/components/header/MobileMenuNav";

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-full lg:min-w-xs lg:max-w-screen-md flex items-center justify-between flex-row relative border-gray-700 px-5 py-8 sm:pb-8 bg-opacity-60 text-gray-100 gap-5 lg:gap-0">
        <div>
          <h1>
            <Link href="/">
              <strong>{"<Alfirman />"}</strong>
            </Link>
          </h1>
        </div>

        <div className="ml-[-0.80rem]">
          <MobileMenuNav />

          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
