interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="inline-flex items-center rounded-full bg-[#0B3C5D] px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="rounded-full bg-[#0B3C5D] px-6 py-3 font-medium text-white transition hover:opacity-90"
    >
      {children}
    </button>
  );
}