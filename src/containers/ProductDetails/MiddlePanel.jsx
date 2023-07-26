import React, { useState } from "react";
import { Nav, Card, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./MiddlePanel.module.css";
// import demoImg from "../../assets/images/product_demo.png";

const MiddlePanel = ({ product }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const selectedColor = useSelector((state) => state.productSlice.color);

  const handleAddToWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  return (
    <Card>
      <Carousel>
        {product.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              // src={image[selectedColor]}
              src={require(`../../assets/images/${image[selectedColor]}`)}
              alt={`${product.name} - ${index}`}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        {/* <img src={demoImg} alt="Demo Image" className="d-block w-100 mb-3" />
        <img src={demoImg} alt="Demo Image" className="d-block w-100 mb-3" />
        <img src={demoImg} alt="Demo Image" className="d-block w-100 mb-3" />
        <img src={demoImg} alt="Demo Image" className="d-block w-100 mb-3" /> */}
        <Nav className="justify-content-center text-uppercase text-decoration-underline">
          <Nav.Link as={NavLink} to="/">
            Jonathan Simkhai
          </Nav.Link>
          <Nav.Link as={NavLink} to="/">
            Blazers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/">
            Viscose
          </Nav.Link>
        </Nav>
        <div onClick={handleAddToWishlist}>
          {isAddedToWishlist ? (
            <span className={`${style.wishlist} ${style.active}`}></span>
          ) : (
            <span className={style.wishlist}></span>
          )}
        </div>
        <div className={style.editorSection}>
          <p className={style.noteTitle}>a note from the editor</p>
          <div className={style.editorNote}>
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky.
          </div>
          <p>By MINNA SHIM, Fashion Editor</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MiddlePanel;
