import React from "react";
import Header from "./Header";
import Routers from "../../../router/Routers";
import Footer from "../../../router/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
