import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Vitor Ricardo - Especialista em Cirurgia do Joelho",
  description: "Dr. Vitor Ricardo - Cirurgião ortopedista especialista em cirurgia do joelho. Tratamento da artrose do joelho, prótese total do joelho e artroscopia. CRM-SP 226.708 | RQE 136.623",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jakartaSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
