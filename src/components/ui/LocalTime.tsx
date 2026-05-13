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
        hour12: false,
        timeZone: "America/Sao_Paulo",
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
      <span className="text-success">●</span> {time}{" "}
      <span className="text-muted-dark">BRT</span>
    </span>
  );
}
