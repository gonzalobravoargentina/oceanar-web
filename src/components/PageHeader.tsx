type Props = { title: string; lead?: string };

export function PageHeader({ title, lead }: Props) {
  return (
    <header className="mx-auto w-full max-w-3xl space-y-4 px-4 pt-16 pb-4">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      {lead && <p className="text-lg">{lead}</p>}
    </header>
  );
}
