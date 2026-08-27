import type { ReactNode } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import ScrollProgress from "../../ui/ScrollProgress/ScrollProgress";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
    </>
  );
};

export default Layout;
