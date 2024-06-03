import { useEffect, useState } from "react";

const useTypewriter = (texts, typingSpeed, deletingSpeed, pauseDuration) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (index === texts.length) return;

        if (subIndex === texts[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, texts]);

    return { text: texts[index].substring(0, subIndex) };
};

export default useTypewriter;
