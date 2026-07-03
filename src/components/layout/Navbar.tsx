import { useEffect, useState } from "react";

import Container from "./Container";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileNav from "./MobileNav";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <>

      <header
        className={`
        fixed
        left-0
        top-0
        z-40
        w-full
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
      >
        <Container>

          <div className="h-20 flex items-center">

            <DesktopNav />

            <MobileNav
              onOpen={() => setOpen(true)}
            />

          </div>

        </Container>

      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}