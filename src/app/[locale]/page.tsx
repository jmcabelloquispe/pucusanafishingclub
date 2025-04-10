import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Hero from '@/components/layout/Hero';
 
export default function HomePage() {
  const t = useTranslations('home');
  return (
    <div>
      <Hero />
      <h1>{t('title')}</h1>
      <Link href="/home">{t('title')}</Link>
    </div>
  );
}