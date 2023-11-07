"use client";
import { useState } from "react";

import Modal from "@/components/modal";
import { Product } from "@/types/types";
import Form from "@/components/form";

function Item({ product, ...props }: { product: Product }) {
    const [hiddenModal, sethiddenModal] = useState(true);
    const [imageUrl, setimageUrl] = useState(product.imgs[0]);
    const handleBuying = (e: any) => {
        e.preventDefault();
        console.log("bsahtek bgs!!!");
    };
    return (
        <Modal
            title={product.name}
            id="doesntmatterjustafiller"
            className=" grid grid-col-2 w-11/12 md:w-10/12 xl:w-8/12 2xl:w-6/12"
            hidden={hiddenModal}
            onClose={() => sethiddenModal(true)}
        >
            <div className="">
                <img src={imageUrl} alt="wait" className="w-full object-contain " />
                <div className="flex ">
                    {product.imgs.map((url, i) => (
                        <img key={i} src={url} alt="" onClick={() => setimageUrl(url)} />
                    ))}
                </div>
            </div>
            <Form id={product.id} className="w-full" name={"item"} submit={handleBuying}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <select className="bg-zinc-200" name="size" id={`${product}_size`}>
                    <option value="S">S</option>
                    <option value="S">M</option>
                    <option value="S">L</option>
                    <option value="S">XL</option>
                </select>
                <button className="bg-olive-500" type="submit">
                    Add to cart
                </button>
            </Form>
        </Modal>
    );
}

export default Item;
