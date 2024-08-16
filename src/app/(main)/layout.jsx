import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <>
      {/* https://bg.ibelick.com/ - bg from this site*/}
      <div className="flex-1 inset-0 -z-100 h-full w-full bg-[radial-gradient(#e5ebe52d_1px,transparent_1px)] [background-size:40px_40px]">
        <Navbar />
        <main className="max-w-screen-xl mx-auto">
          {children}
          <ScrollToTop />
          <Toaster />
        </main>
      </div>
      <Footer />
    </>
  );
}
