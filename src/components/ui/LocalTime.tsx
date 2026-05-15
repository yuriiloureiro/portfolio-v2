"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Sao_Paulo",
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  if (!time) return <span className="font-mono text-foreground">--:-- --</span>;

  return (
    <span className="font-mono text-foreground normal-case tracking-normal">
      {time}
    </span>
  );
}
