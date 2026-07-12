import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "CALERO Studio",
  description:
    "CALERO Studio crée des expériences web modernes et performantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
