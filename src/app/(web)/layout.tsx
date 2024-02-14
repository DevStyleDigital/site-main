import Whatsappicon from '@/assets/svg/whatsapp';
import Footer from '@/components/app/footer';
import Header from '@/components/app/header';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="fixed bottom-24 md:bottom-8 right-8 flex z-[100] rounded-full bg-green-600 hover:scale-105 transition-all">
        <a
          href={`https://wa.me/5515988045279?text=${encodeURIComponent(
            'Olá vim do site!',
          )}`}
          className="p-4 w-fit"
          aria-label="WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <Whatsappicon className="w-8 h-8 text-white" />
        </a>
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
