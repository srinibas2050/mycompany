import React from "react";
import style from "./ColorPicker.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateColor } from "../../store/productSlice";

import pc_1 from "../../assets/images/product_color_1.png";
import pc_2 from "../../assets/images/product_color_2.png";

const colorOptions = [
  { id: 1, color: "Conchiglia", thumbnail: pc_1 },
  { id: 2, color: "Red", thumbnail: pc_2 },
];

const ColorPicker = () => {
  const selectedColor = useSelector((state) => state.productSlice.color);
  const dispatch = useDispatch();

  return (
    <div className={style.colorPicker}>
      {colorOptions.map((option) => (
        <label
          key={option.id}
          className={`${style.colorOption} ${
            option.color === selectedColor ? style.active : ""
          }`}
        >
          <input
            type="radio"
            name="color"
            value={option.color}
            checked={option.color === selectedColor}
            onChange={(e) => dispatch(updateColor(e.target.value))}
          />
          <div className={`${style.thumbnailContainer}`}>
            <img src={option.thumbnail} alt={option.color} />
          </div>
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
