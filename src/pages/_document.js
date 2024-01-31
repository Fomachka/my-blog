import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  const setThemeMode = `
    function getThemeMode() {
        const theme = window.localStorage.getItem('theme')
        return theme ? theme : 'dark'
    }
    document.body.dataset.theme = getThemeMode()
`;
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
