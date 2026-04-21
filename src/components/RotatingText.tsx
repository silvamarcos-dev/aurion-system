import { useEffect, useState } from "react";

const words = [
  "conversa",
  "organiza",
  "decide",
  "executa",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
      {words[index]}
    </span>
  );
}