import { i18n } from '@/i18n-config';

export default function Home() {
  return (
    <html>
      <head>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
        <script dangerouslySetInnerHTML={{ 
          __html: `
            (function() {
              // Get browser language
              var userLang = navigator.language || navigator.userLanguage;
              userLang = userLang.split('-')[0].toLowerCase();
              
              // Check if the language is supported
              var supportedLanguages = ${JSON.stringify(i18n.locales)};
              var defaultLanguage = "${i18n.defaultLocale}";
              
              // Redirect to the appropriate language page
              var targetLang = supportedLanguages.includes(userLang) ? userLang : defaultLanguage;
              window.location.replace(targetLang + '.html');
            })();
          `
        }} />
      </head>
      <body>
        <noscript>
          <meta http-equiv="refresh" content={`0;url=${i18n.defaultLocale}.html`} />
          <p>Redirecting to <a href={`${i18n.defaultLocale}.html`}>{i18n.defaultLocale} version</a>...</p>
        </noscript>
        <p>Redirecting...</p>
      </body>
    </html>
  );
}
