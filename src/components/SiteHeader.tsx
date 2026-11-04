import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href } from "@/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MainNav } from "./MainNav";

type Props = { lang: Locale; dict: Dictionary };

export function SiteHeader({ lang, dict }: Props) {
  return (
    <header className="border-ink/10 bg-wind/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        {/* TODO(contenido): logo de Oceanar (identidad en definición). */}
        <Link href={href(lang)} className="display text-base sm:text-lg">
          {dict.meta.siteName}
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <MainNav lang={lang} labels={dict.nav} />
          <LanguageSwitcher lang={lang} labels={dict.languageSwitcher} />
        </div>
      </div>
    </header>
  );
}
