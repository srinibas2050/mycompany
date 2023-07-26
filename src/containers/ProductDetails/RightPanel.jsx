import React, { useState } from "react";
import { Button, Card, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./RightPanel.module.css";
import ColorPicker from "./ColorPicker";

import { useSelector, useDispatch } from "react-redux";
import { updateSize } from "../../store/productSlice";
import { Link } from "react-router-dom";

const RightPanel = () => {
  const selectedColor = useSelector((state) => state.productSlice.color);
  const selectedSize = useSelector((state) => state.productSlice.size);
  const dispatch = useDispatch();
  const product = {
    name: "JONATHAN SIMKHAI",
    price: "$255",
    sizes: ["XS", "S", "M", "L", "XXL"],
  };

  const handleAddToCart = () => {
    console.log("Product added to bag:", product.name, selectedSize);
  };

  return (
    <Card style={{ width: "300px" }}>
      <Card.Body>
        <Card.Title className={style.productTitle}>{product.name}</Card.Title>
        <Card.Text>Lurex Linen Viscose Jacket in Conchiglia</Card.Text>
        <Card.Text>
          <strong>{product.price}</strong>
        </Card.Text>
        <Form.Group>
          <Form.Label>
            <strong>COLOR</strong> {selectedColor}
          </Form.Label>
          <ColorPicker />
        </Form.Group>
        <Form.Group>
          <Form.Label className="d-flex justify-content-between">
            <span>
              <strong>SIZE</strong> {selectedSize}
            </span>
            <Nav.Link as={NavLink} to="/" className={style.sizeGuide}>
              SIZE GUIDE
            </Nav.Link>
          </Form.Label>
          <div className={style.customRadios}>
            {product.sizes.map((size) => (
              <div
                key={size}
                className={`${style.customRadio} rounded-pill ${
                  selectedSize === size ? style.active : ""
                }`}
                onClick={() => dispatch(updateSize(size))}
              >
                <input
                  type="radio"
                  id={`size-${size}`}
                  name="size"
                  value={size}
                  defaultChecked={selectedSize === size}
                />
                <label htmlFor={`size-${size}`}>{size}</label>
              </div>
            ))}
          </div>
        </Form.Group>
        <Button
          className={`${style.addCartBtn} rounded-pill`}
          onClick={handleAddToCart}
        >
          ADD TO BAG
        </Button>
        <Card.Text>
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </Card.Text>
        <Card.Text>Speak to a Personal Stylist CHAT NOW</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RightPanel;
