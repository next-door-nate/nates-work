import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, header, footer }) {
  return (
    <main>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </main>
  );
}
