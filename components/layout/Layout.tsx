import { ReactNode } from 'react';
import Footer from "./Footer";
import Header from "./Header";

interface IChildrenProps {
  children?: ReactNode;
}

export default function Layout({ children }: IChildrenProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}