import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Providers from "./providers/providers";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}