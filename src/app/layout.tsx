"use client";

// import type { Metadata } from "next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "@/theme/theme";
import { store } from "@/store";
import { Provider } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { Inter } from "next/font/google";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Admin Dashboard",
// };

const inter = Inter({ subsets: ["latin"] });

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = getTheme(mode as "light" | "dark");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Provider store={store}>
          <ThemeClient>{children}</ThemeClient>
        </Provider>
      </body>
    </html>
  );
}
