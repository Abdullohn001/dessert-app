import { useEffect,  } from "react";
import SingleCart from "./SingleCart";

import { useSelector, useDispatch } from "react-redux";
import { addAllDesert } from "../futures/dessertSlice";


function ProductList() {
  const dispatch = useDispatch()
  const { allDeserts } = useSelector((state) => state.orders);

  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/66a0f06a1d2cd3eb11443653/desserts"
    )
      .then((data) => data.json())
      .then((deserts) => dispatch(addAllDesert(deserts.data)));
  }, []);

  return (
    <div className="w-full mx-auto">
      <h1 className="text-[40px] font-mono mb-8">Desserts</h1>
      <div className="flex lg:flex-row  flex-col lg:flex-wrap gap-5 w-full">
        {allDeserts &&
          allDeserts.map((dessert) => {
            return <SingleCart dessert={dessert} key={dessert.id} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
