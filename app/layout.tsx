import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Script from "next/script";
import LocalBusinessSchema from "./components/LocalBusinessSchema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wmaesquadriasevidros.com.br"),

  title: {
    default: "WMA Esquadrias e Vidros",
    template: "%s | WMA Esquadrias e Vidros",
  },

  description:
    "Esquadrias de alumínio, portas ACM, vidraçaria e projetos sob medida em Belo Horizonte e região.",

  keywords: [
    "esquadrias de aluminio bh",
    "porta acm",
    "vidraçaria bh",
    "janela de aluminio",
    "blindex belo horizonte",
  ],

  openGraph: {
    title: "WMA Esquadrias e Vidros",

    description:
      "Projetos modernos em alumínio e vidro com fabricação sob medida e instalação profissional.",

    url: "https://wmaesquadriasevidros.com.br",

    siteName: "WMA Esquadrias e Vidros",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/icons/logo-background-black.png",
        width: 1200,
        height: 630,
        alt: "WMA Esquadrias e Vidros",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "WMA Esquadrias e Vidros",

    description:
      "Esquadrias modernas, portas ACM e vidraçaria premium em Belo Horizonte.",

    images: ["/images/opengraph.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header /> {children}
        <Footer />
        <LocalBusinessSchema />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2S5S8CWBY1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag('js', new Date());

    gtag('config', 'G-2S5S8CWBY1', {
      page_path: window.location.pathname,
    });
  `}
        </Script>
      </body>
    </html>
  );
}
