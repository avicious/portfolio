import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export const metadata = {
  title: "Shubham | Web Developer",
  description:
    "I'm an experienced Web Developer who is passionate about staying up-to-date with latest web development technologies like Next.js and React with a strong foundation in HTML, CSS and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
