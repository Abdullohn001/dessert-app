import { useSelector, useDispatch } from "react-redux";
import bacground from "../images/Empty.svg";

import { deleteOrder } from "../futures/dessertSlice";

function Card() {
  const dispatch = useDispatch();
  const { ordered, totalPrice, orderTotal } = useSelector(
    (dessert) => dessert.orders
  );
  const handleRemuve = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <div className="max-w-[385px] w-full md:max-w-[300px] mx-auto sm:w- h-full rounded-lg bg-white p-[24px]">
      <h1 className="text-3xl text-[#C73B0F] font-semibold font-mono">
        Your Cart {orderTotal}
      </h1>
      <div className="mt-[33px]">
        {ordered &&
          ordered.map((desert) => {
            const singlePrice = desert.amout * desert.price;

            return (
              <div key={desert.id}>
                <div className="mt-[33px] flex justify-between items-center">
                  <div>
                    <h1 className="font-semibold">{desert.name}</h1>
                    <div className="flex gap-10">
                      <h1 className="text-[#C73B0F] font-semibold">
                        {desert.amout}x
                      </h1>
                      <h1 className="text-[#87635A] font-light">
                        {desert.price}$
                      </h1>
                      <h1 className="text-[#87635A] font-semibold">
                        {singlePrice}$
                      </h1>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemuve(desert.id)}
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="w-full mt-2" />
              </div>
            );
          })}
      </div>
      {!orderTotal && (
        <div className="w-full h-full">
          <figure>
            <img src={bacground} alt="" />
          </figure>
        </div>
      )}
      {orderTotal && (
        <div>
          <div className="flex mt-8 font-mono">
            <h1 className="flex">Order Total</h1>
            <br />
            <h1 className="font-semibold text-xl ml-[150px]">${totalPrice}</h1>
          </div>
          <button className="text-white h-14 mt-5 w-full rounded-lg bg-[#C73B0F]">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
