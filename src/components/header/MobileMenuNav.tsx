"use client";

import styles from "@/styles/mobileMenu.module.css";
import { useEffect } from "react";
import cn from "classnames";
import useMenuNav from "./useMenuNav";
import LinksMenuNav from "./LinksMenuNav";
import Menu from "../ui/icons/Menu";
import Cross from "../ui/icons/Cross";

const MobileMenuNav = () => {
  const { isMenuOpen, toggleMenu, isMenuMounted, isMenuRendered } =
    useMenuNav();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        data-testid="mobile-menu-nav"
        className={cn(styles.burger, "visible lg:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <Menu
          data-hide={isMenuOpen}
          className="h-5 w-5 absolute text-gray-100"
        />

        <Cross
          data-hide={!isMenuOpen}
          className="h-5 w-5 absolute text-gray-100"
        />
      </button>
      {isMenuMounted && (
        <ul
          data-testid="menu-links"
          className={cn(
            styles.menu,
            "flex flex-col items-start justify-center absolute right-0 backdrop-blur-sm bg-black/20 text-end p-5 rounded-br-2xl mr-5",
            isMenuRendered && styles.menuRendered
          )}
        >
          <LinksMenuNav />
        </ul>
      )}
    </>
  );
};

export default MobileMenuNav;
