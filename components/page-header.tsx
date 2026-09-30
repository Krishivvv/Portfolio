// Title block for functional pages: content is on screen immediately.
export function PageHeader({
  eyebrow,
  title,
  accent,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1320px] px-4 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 max-w-[16ch] text-mega font-semibold">
        {title}
        {accent && (
          <>
            {" "}
            <span className="serif text-accent">{accent}</span>
          </>
        )}
      </h1>
      {lede && <p className="mt-8 max-w-[56ch] text-lg text-ink-2 sm:text-xl">{lede}</p>}
      {children}
    </header>
  );
}
