'use client';

import { useEffect } from 'react';
import { match } from '@formatjs/intl-localematcher';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export default function RootRedirectPage() {
  useEffect(() => {
    const userLocales = navigator.languages
      ? [...navigator.languages]
      : [navigator.language];
    const matched = match(userLocales, locales, defaultLocale);
    window.location.replace(`/${matched}/`);
  }, []);

  return null;
}
