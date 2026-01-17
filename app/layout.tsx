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
  title: "Dr. Vitor - Cirurgia de Joelho",
  description: "Especialista em cirurgia de joelho. Tratamento de artrose e lesões esportivas com excelência e cuidado.",
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
