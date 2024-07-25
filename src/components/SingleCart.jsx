import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

import { incrementOrder, decrementOrder } from "../futures/dessertSlice";

import { useDispatch, useSelector } from "react-redux";

function SingleCart({ dessert }) {
  const dispatch = useDispatch();

  const [addButtons, setAddButtons] = useState(false);

  useEffect(() => {
    if (dessert.amout == 0) {
      setAddButtons(false);
    }
  },[dessert.amout])

  return (
    <div className="w-[250px] h-[360px]">
      <img className="rounded-lg" src={dessert.image.desktop} alt="" />
      <div className="w-40 h-10 font-semibold mx-auto">
        {!addButtons && (
          <button
            className="w-full mtop border mx-auto rounded-2xl h-full"
            onClick={() => {
              setAddButtons(true);
              dispatch(incrementOrder(dessert.id));
            }}
          >
            Add to Card
          </button>
        )}
        {addButtons && (
          <button className="w-full text-white bg-orange-600 mtop gap-10 border mx-auto rounded-2xl h-full">
            <button className="w-8 mr-5 border rounded-full" onClick={() => dispatch(decrementOrder(dessert.id))}>
              -
            </button>
            <span className="w-10">{dessert.amout}</span>

            <button className="w-8 ml-5 border  rounded-full" onClick={() => dispatch(incrementOrder(dessert.id))}>
              +
            </button>
          </button>
        )}
      </div>
      <h3 className="opacity-50 font-normal">{dessert.category}</h3>
      <h3 className="4xl font-semibold">{dessert.name}</h3>
      <h2 className="font-semibold text-orange-200 text-xl">
        ${dessert.price}
      </h2>
      
    </div>
  );
}

export default SingleCart;
