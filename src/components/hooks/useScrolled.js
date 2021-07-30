import { useEffect, useState } from "react";

const useScroll = () => {
  const isBrowser = typeof window !== undefined;
  const [scrolled, setScrolled] = useState(false);
  const handleScrolling = () => {
    setScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    if (isBrowser) {
      const initScrolled = window.pageYOffset > 0;
      setScrolled(initScrolled);
      window.addEventListener("scroll", handleScrolling);
      return () => window.removeEventListener("scroll", handleScrolling);
    }
  });

  return { scrolled };
};

export default useScroll;
