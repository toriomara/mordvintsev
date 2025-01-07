import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/libs/utils";

const inter = Inter({
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
    <html lang="ru" suppressHydrationWarning={true}>
      <body className={cn(inter.className, "auto")}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
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
