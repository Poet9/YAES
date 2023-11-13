// b67a3f17-2b7d-450f-b0b8-c98775e3413e
import React from "react";
import { data, totalPrice } from "./data";
import CartCard from "@/components/cartCard";

function Cart() {
    return (
        <div className="pt-36 min-w-screen min-h-screen">
            <div className="w-full flex justify-between p-8">
                <h1 className=" "> Cart items</h1>
                <div className="flex gap-4 items-center">
                    <h3 className="">{totalPrice}</h3>
                    <button className="bg-green-400 hover:bg-green-500 rounded text-white p-2">
                        Order
                    </button>
                </div>
            </div>
            {data.map((item, i) => (
                <CartCard key={`cart_el_${i}`} data={item} />
            ))}
        </div>
    );
}

export default Cart;
