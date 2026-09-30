// Section shell: a 1px rule, a plain headline, optional supporting line.
export function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-seam">
      <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 grid gap-4 sm:mb-16 lg:grid-cols-12 lg:items-end">
          <h2 id={`${id}-title`} className="text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-5xl lg:col-span-6">
            {title}
          </h2>
          {lede && <p className="max-w-[52ch] text-pencil sm:text-lg lg:col-span-5 lg:col-start-8">{lede}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
