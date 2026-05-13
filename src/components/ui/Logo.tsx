import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Yuri Loureiro — Home"
      className="group inline-flex items-center gap-2"
    >
      <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
      <span className="font-mono text-sm font-bold tracking-tight text-foreground">
        yuri<span className="text-muted">.</span>loureiro
      </span>
    </Link>
  );
}
