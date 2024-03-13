import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex-1">
        <Navbar />
        <main className="max-w-screen-xl mx-auto">
          {children}
          <ScrollToTop />
        </main>
      </div>
      <Footer />
    </>
  );
}
