import type { CSSProperties } from "react";

interface TextCascadeProps {
  text: string;
}

export function TextCascade({ text }: TextCascadeProps) {
  let charIndex = 0;

  return (
    <span className="text-cascade" aria-label={text.trim()}>
      {text.split(/(\s+)/).map((part, partIndex) => {
        if (!part) return null;

        if (/^\s+$/.test(part)) {
          return (
            <span className="text-cascade__space" aria-hidden="true" key={`space-${partIndex}`}>
              {" "}
            </span>
          );
        }

        return (
          <span className="text-cascade__word" aria-hidden="true" key={`word-${partIndex}`}>
            {Array.from(part).map((char) => {
              const style = { "--char-index": Math.min(charIndex, 42) } as CSSProperties;
              const key = `${partIndex}-${charIndex}`;
              charIndex += 1;

              return (
                <span className="text-cascade__char" style={style} key={key}>
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
