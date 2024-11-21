import { Inter } from "next/font/google";
import "./globals.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vasanth",
  description: "vasanth.",
};

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>
          <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </PrimeReactProvider>
  );
}
