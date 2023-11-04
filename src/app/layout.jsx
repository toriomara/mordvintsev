import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Адвокат Р.Ф. Мордвинцев',
  description: 'Сайт адвоката Р.Ф. Мордвинцева',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
