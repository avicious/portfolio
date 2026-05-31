import { Outfit, Ovo } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

// Fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: ["400"],
});

// Metadata
export const metadata = {
  title: "Shubham - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} h-full antialiased leading-8 overflow-x-hidden scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
