"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-vazirmatn), sans-serif",
  },
});

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}