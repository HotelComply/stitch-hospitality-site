export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl lg:text-3xl text-[#141413] mt-14 mb-6 first:mt-0">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#141413]/70 font-light leading-relaxed mb-5">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col gap-3 mb-5 text-[#141413]/70 font-light leading-relaxed list-disc pl-5">
      {children}
    </ul>
  );
}

export function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[#9b8059] hover:text-[#806746] underline decoration-1 underline-offset-4"
    >
      {children}
    </a>
  );
}
