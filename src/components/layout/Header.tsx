"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { type Locale } from "@/types/i18n";

const locales: Locale[] = ["es", "en"];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    startTransition(() => {
      router.push(segments.join("/"));
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Pucusana Fishing Club</h1>
        <div className="flex gap-6 items-center">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => changeLocale(locale)}
              className={`text-sm font-medium ${
                pathname.startsWith(`/${locale}`) ? "text-blue-700" : "text-gray-600"
              }`}
              disabled={isPending}
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
