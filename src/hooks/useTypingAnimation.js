import { useState, useEffect } from "react";

/**
 * Animates a string character-by-character.
 * Re-runs whenever `text` changes (e.g. on banner slide change).
 * Returns { typedText, isTyping }.
 */
export function useTypingAnimation(text, speed = 70) {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    setTypedText("");
    setIsTyping(true);

    const id = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return { typedText, isTyping };
}