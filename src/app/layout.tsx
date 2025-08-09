
import { Menu } from "../components/menu/Menu";
import "./globals.css";

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
