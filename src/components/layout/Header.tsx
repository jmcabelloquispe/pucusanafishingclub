'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';

const locales = ['es', 'en'];

export default function Header() {
  const t = useTranslations('nav'); // "nav" debe existir en tus mensajes
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    startTransition(() => {
      router.replace(segments.join('/'));
    });
  };

  return (
    <header className="bg-arena">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold text-blue-700">
          Pucusana Fishing Club
        </Link>
        <nav className="flex items-center gap-6">
          <Link href={`/${locale}/about`} className="hover:underline">
            {t('about')}
          </Link>
          <Link href={`/${locale}/services`} className="hover:underline">
            {t('services')}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:underline">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex gap-2 items-center">
          {locales.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLocale(lng)}
              className={`text-sm px-2 py-1 rounded ${
                lng === locale ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
              }`}
              disabled={isPending}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
