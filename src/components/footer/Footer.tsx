import AnimationContainer from "@/components/AnimationContainer";
import ExternalLink from "@/components/ExternalLink";
import Home from "../ui/icons/Home";
import Document from "../ui/icons/Document";
import Storage from "../ui/icons/Storage";
import Book from "../ui/icons/Book";
import User from "../ui/icons/User";
import Terminal from "../ui/icons/Terminal";
import Github from "../ui/icons/Github";
import LinkedIn from "../ui/icons/LinkedIn";
import Twitter from "../ui/icons/Twitter";

const Footer = () => {
  return (
    <footer className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full border-1 border-gray-800 mb-8" />6
      <AnimationContainer customClassName="w-full max-w-2xl grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          {links
            .filter((_, i) => i < 3)
            .map((link, i) => (
              <ExternalLink key={i} href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.name}
              </ExternalLink>
            ))}
        </div>
        <div className="flex flex-col space-y-4">
          {links
            .filter((_, i) => i >= 3 && i <= 5)
            .map((link, i) => (
              <ExternalLink key={i} href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.name}
              </ExternalLink>
            ))}
        </div>
        <div className="flex flex-col space-y-4">
          {links
            .filter((_, i) => i > 5)
            .map((link, i) => (
              <ExternalLink key={i} href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.name}
              </ExternalLink>
            ))}
        </div>
      </AnimationContainer>
    </footer>
  );
};

export default Footer;

const links = [
  {
    icon: Home,
    href: "/",
    name: "Home",
  },
  {
    icon: User,
    href: "/about",
    name: "About",
  },
  {
    icon: Terminal,
    href: "/projects",
    name: "Projects",
  },
  {
    icon: Github,
    href: "https://github.com/alfirmanpahlepi",
    name: "Github",
  },
  {
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/alfirmanpahlepi",
    name: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/PahlepiAlfirman",
    name: "Twitter",
  },
  {
    icon: Book,
    href: "/blog",
    name: "Blog",
  },
  {
    icon: Storage,
    href: "#",
    name: "Contact",
  },
  {
    icon: Document,
    href: "#",
    name: "My CV",
  },
];
