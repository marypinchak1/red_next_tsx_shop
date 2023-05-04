import React from "react";
// components
import Header from "./header";
import Footer from "./footer";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
