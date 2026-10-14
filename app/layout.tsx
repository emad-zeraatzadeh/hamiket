import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" className={`${vazirmatn.className} h-full antialiased`}>
      <body className="h-screen flex justify-center items-center">
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
