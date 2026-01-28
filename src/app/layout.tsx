import "@/app/assets/css/globals.css";
import "@/app/assets/css/responsive.css";
import Header from "./layout/header";
import { DM_Sans, Playfair_Display } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${dmSans.variable} ${playfair.variable}`}>

      <meta name="robots" content="noindex" />

      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="UPLIFT" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
