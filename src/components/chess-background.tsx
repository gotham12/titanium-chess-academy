export function ChessBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue/20 blur-[120px]" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
      <svg
        className="absolute right-[8%] top-[18%] h-28 w-28 animate-float opacity-[0.07]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 4c-2 8-8 10-8 18 0 4 2 6 4 8-6 2-10 8-10 14 0 8 6 14 14 14s14-6 14-14c0-6-4-12-10-14 2-2 4-4 4-8 0-8-6-10-8-18z" />
      </svg>
      <svg
        className="absolute bottom-[20%] left-[10%] h-20 w-20 animate-float opacity-[0.05] [animation-delay:1.5s]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M18 8h28v6c0 6-4 8-8 10 6 2 10 8 10 14 0 10-8 18-18 18S12 48 12 38c0-6 4-12 10-14-4-2-8-4-8-10V8z" />
      </svg>
    </div>
  );
}
