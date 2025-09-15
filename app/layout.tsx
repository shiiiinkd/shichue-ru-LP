import type { Metadata } from "next";
import { Noto_Sans_JP, Nunito } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "しちゅえーる | 推しの声で朝を迎えるアプリ",
  description:
    "好きな声優やVTuberの声をアラームに。推し活のテンションで一日が始まる、新しい目覚まし体験。",
  keywords: "アラーム,目覚まし,声優,VTuber,推し活,朝,アプリ",
  authors: [{ name: "しちゅえーる" }],
  creator: "しちゅえーる",
  publisher: "しちゅえーる",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shichueru.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "しちゅえーる | 推しの声で朝を迎えるアプリ",
    description:
      "好きな声優やVTuberの声をアラームに。推し活のテンションで一日が始まる、新しい目覚まし体験。",
    url: "https://shichueru.vercel.app",
    siteName: "しちゅえーる",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "しちゅえーる",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "しちゅえーる | 推しの声で朝を迎えるアプリ",
    description:
      "好きな声優やVTuberの声をアラームに。推し活のテンションで一日が始まる、新しい目覚まし体験。",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
