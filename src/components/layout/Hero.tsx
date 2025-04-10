'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center text-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/40 rounded-xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <Link
          href={`/${locale}/contact`}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded transition"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
