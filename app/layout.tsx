import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "WMA Esquadrias de Alumínio e Vidros | Contagem e BH",
    template: "%s | WMA Esquadrias",
  },
  description:
    "Especialistas em esquadrias de alumínio, janelas, portas, fachadas de vidro e projetos sob medida em Belo Horizonte, Contagem e região.",
  keywords: [
    "esquadrias de alumínio bh",
    "esquadrias de aluminio perto de mim",
    "esquadrias bh",
    "janelas de alumínio",
    "serralheria de alumínio perto de mim",
    "serralheria de alumínio em bh",
    "esquadrias de alumínio linha gold",
    "esquadrias de alumínio linha suprema",
    "esquadrias de alumínio linha 25",
    "esquadrias de alumínio linha 42",
    "fabricação de portas acm",
    "esquadrias sob medida",
  ],
  authors: [{ name: "WMA Esquadrias" }],
  creator: "WMA Esquadrias",
  metadataBase: new URL("https://wmaesquadriasevidros.com.br"),
  openGraph: {
    title: "WMA Esquadrias de Alumínio e Vidros",
    description:
      "Soluções em esquadrias de alumínio e vidros sob medida em Contagem e Belo Horizonte.",
    url: "https://wmaesquadriasevidros.com.br",
    siteName: "WMA Esquadrias",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
      </body>
    </html>
  );
}
