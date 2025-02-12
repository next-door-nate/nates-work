import Header from './Header';
import Footer from './Footer';
import ReactLenis, { useLenis } from 'lenis/react';

export default function Layout({ children, header, footer }) {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <main>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </main>
  );
}
