type Props = { title: string; lead?: string };

export function PageHeader({ title, lead }: Props) {
  return (
    <header className="from-sky to-wind bg-linear-to-b">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-5 pt-24 pb-16 md:pt-36">
        <h1 className="display text-5xl text-balance sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {lead && (
          <p className="max-w-2xl text-xl leading-relaxed md:text-2xl">
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}
