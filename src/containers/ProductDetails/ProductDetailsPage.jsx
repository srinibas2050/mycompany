import React, { useState, useEffect } from "react";
import style from "./ProductDetailsPage.module.css";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";
export default function ProductDetailsPage() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 1;
    const windowWidth = window.innerWidth; // Sticky functionlity will stop in mobile view
    setIsSticky(scrollPosition >= scrollThreshold && windowWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const product = {
    name: "Product Name",
    price: "$19.99",
    images: [
      {
        Conchiglia: "product_1.png",
        Red: "product_red_1.png",
      },
      {
        Conchiglia: "product_2.png",
        Red: "product_red_2.png",
      },
      {
        Conchiglia: "product_3.png",
        Red: "product_red_3.png",
      },
      {
        Conchiglia: "product_4.png",
        Red: "product_red_4.png",
      },
      ,
      {
        Conchiglia: "product_5.png",
        Red: "product_red_5.png",
      },
    ],
  };
  return (
    <div className="row">
      <div
        className={`col-md-3 ${isSticky ? style.stickyTop : ""} ${
          style.leftSection
        }`}
      >
        <LeftPanel />
      </div>

      <div className="col-md-6">
        <MiddlePanel product={product} />
      </div>

      <div
        className={`col-md-3 ${isSticky ? style.stickyTop : ""} ${
          style.rightSection
        }`}
      >
        <RightPanel />
      </div>
    </div>
  );
}
