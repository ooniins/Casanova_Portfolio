import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one.
 * Respects prefers-reduced-motion by just showing the first word statically.
 */
export function useTypedText(words, { typeSpeed = 55, holdMs = 1600, deleteSpeed = 30 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(words[0] ?? "");
      return;
    }
    if (!words.length) return;

    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, wordIndex, words]);

  return text;
}