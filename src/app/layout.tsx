import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gonya = localFont({
  src: [
    {
      path: "../../public/fonts/Gonya-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gonya-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gonya",
});

const elmsSans = localFont({
  src: [
    {
      path: "../../public/fonts/ElmsSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ElmsSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-elms-sans",
});

export const metadata: Metadata = {
  title: "Renata Grossi Advocacia",
  description: "Especialista em Direito Previdenciário.",
  icons: {
    icon: [{ url: "/figma/simbolo-dourado.svg", type: "image/svg+xml" }],
    shortcut: ["/figma/simbolo-dourado.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${gonya.variable} ${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
