import { Playfair_Display, Lato } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar';
const playfair = Playfair_Display({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: "MH Parvej - Portfolio",
  description: "Welcome to my portfolio showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
