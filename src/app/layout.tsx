import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap", // لتحميل الخط بسلاسة
});

export const metadata: Metadata = {
  title: "منزلك الراقي",
  description: "أثاث فاخر يجمع بين الفخامة والطبيعة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${elMessiri.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
