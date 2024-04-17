import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Anek_Telugu({ subsets: ["latin-ext"] });

// No need to import or render Document here

export const metadata = {
  title: "Daily Trade",
  icons: {
    icon: [
      { url: '/image/features01.png' },
      new URL('/image/features01.png', 'https://example.com'),
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}