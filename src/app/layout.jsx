import "./globals.css";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    template: "%s | Адвокат Р.Ф. Мордвинцев",
    default: "Адвокат Р.Ф. Мордвинцев",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://mordvintsev.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
