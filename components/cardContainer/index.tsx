"use client";
import { fetchCards } from "./data";
import Card from "./card";
import { useEffect, useState } from "react";
import ItemCard from "@/components/itemCard";
import { Item } from "@/types/types";

function CardContainer({ searchQuery, ...props }: { searchQuery: string }) {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchCards(process.env.NEXT_PUBLIC_MOCK_API)
            .then((resData) => setdata(resData))
            .catch((e) => console.log({ err: e.message }));
        setIsLoading(false);
        //   return () => {
        //     setdata([]);
        //   }
    }, []);
    const [modalItem, setModalItem] = useState({
        id: "",
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: { rate: 0, count: 0 },
    });
    if (isLoading) {
        return <div> Loading .....</div>;
    }
    return (
        <div
            id={"cardContainerID"}
            className="w-full grid place-items-center py-8 gap-4 grid-cols-1 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 "
        >
            {Array.isArray(data) ? (
                data.map((item: Item, index) => (
                    <Card key={index} data={item} popupFunc={() => setModalItem({ ...item })} />
                ))
            ) : (
                <div className="text-center"> wow its empty</div>
            )}
            <ItemCard product={modalItem} />
        </div>
    );
}

export default CardContainer;
