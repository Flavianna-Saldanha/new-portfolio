
import { Menu } from "../components/menu/Menu";
import { menuItem } from "@/data/menuItem";

import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Meu Portfólio profissional.',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
