import { getRequestConfig } from "next-intl/server";
import { type Locale } from "@/types/i18n";

console.log("✅ src/i18n.ts loaded");

export default getRequestConfig(async ({ locale }) => {
  console.log("✅ getRequestConfig called with locale:", locale);

  const locales: Locale[] = ["es", "en"];

  if (!locale || !locales.includes(locale as Locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return {
    locale: locale as Locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
