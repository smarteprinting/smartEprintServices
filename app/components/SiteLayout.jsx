import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}
