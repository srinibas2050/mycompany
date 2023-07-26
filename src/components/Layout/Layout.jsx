import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <section className="containerSection">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </Fragment>
  );
};
export default Layout;
