import { useState, useEffect } from "react";

export default function useMediaQuery() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const media = window.matchMedia('(min-width: 786px)');
        const listener = () => setIsDesktop(media.matches);
        listener();
        window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
}