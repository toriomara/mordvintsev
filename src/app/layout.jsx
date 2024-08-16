import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    template: "%s | Сайт Адвоката Р.Ф. Мордвинцева",
    default: "Сайт Адвоката Р.Ф. Мордвинцева",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://mordvintsev.vercel.app"),
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
        </ThemeProvider>
      </body>
    </html>
  );
}
