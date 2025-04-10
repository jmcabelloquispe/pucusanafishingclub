import { NextIntlClientProvider, useMessages } from "next-intl";
import { type Locale } from "@/types/i18n";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  console.log("messages");
  const messages = useMessages();
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
