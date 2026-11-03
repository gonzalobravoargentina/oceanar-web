import { notFound } from "next/navigation";
import { hasLocale } from "./config";
import { getDictionary } from "./dictionaries";

/** Validates the [lang] param and loads its dictionary (404 otherwise). */
export async function resolveLang(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, dict: await getDictionary(lang) };
}

/** Same as resolveLang, for generateMetadata. */
export async function resolveLocale(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
