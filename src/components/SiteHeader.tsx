import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href } from "@/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MainNav } from "./MainNav";

type Props = { lang: Locale; dict: Dictionary };

export function SiteHeader({ lang, dict }: Props) {
  return (
    <header className="relative border-b border-current/20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        {/* TODO(contenido): logo de Oceanar (identidad en definición). */}
        <Link href={href(lang)} className="text-lg font-semibold">
          {dict.meta.siteName}
        </Link>
        <div className="flex items-center gap-4">
          <MainNav lang={lang} labels={dict.nav} />
          <LanguageSwitcher lang={lang} labels={dict.languageSwitcher} />
        </div>
      </div>
    </header>
  );
}
