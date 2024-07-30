import { outfit } from "next/font/google";
import "./globals.css";

const outfit = outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Café de altura",
  description: "Café de especialidad directo a tu puerta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
