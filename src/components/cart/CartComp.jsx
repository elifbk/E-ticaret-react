import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between my-5">
      <img className="w-[150px] h-[150px]" src={cart?.image} alt="" />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div className="">{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white text-xl w-[150px] h-16 flex items-center justify-center cursor-pointer rounded-md"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
