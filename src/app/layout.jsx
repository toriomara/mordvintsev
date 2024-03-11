import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Rubik } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";

const rubik = Rubik({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Адвокат Р.Ф. Мордвинцев",
  description: "Сайт адвоката Р.Ф. Мордвинцева",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <ScrollToTop /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
