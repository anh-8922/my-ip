import { useState, useEffect } from "react";

export default function useMediaQUery(query) {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.match !== match) {
            setMatch(media.match);
        }
        const listener = () => setMatch(meida.match);
        window.addEventListener("resize", listener);
        return() => window.removeEventListener("resize", listener)
    }, [match, query]);
    return match;
}
