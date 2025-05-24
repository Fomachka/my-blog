import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  //   const setThemeMode = `
  //   (function() {
  //     try {
  //       const theme = localStorage.getItem('theme');
  //       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //       document.body.dataset.theme = theme || (prefersDark ? 'dark' : 'light');
  //     } catch (_) {}
  //   })();
  // `;
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
