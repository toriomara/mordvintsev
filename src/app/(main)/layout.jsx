import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className='flex-1'>
        <Navbar />
        {/* <main className="max-w-screen-xl mx-auto bg-[url('/images/bg-dots.svg')] bg-fixed z-100"> */}
        <main className='max-w-screen-xl mx-auto'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
