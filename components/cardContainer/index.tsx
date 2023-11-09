"use client";
import { fetchCards } from "./data";
import Card from "./card";
import { useEffect, useState } from "react";

function CardContainer({ searchQuery, ...props }: { searchQuery: string }) {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchCards(`api/products`)
            .then((resData) => setdata(resData))
            .catch((e) => console.log({ err: e.message }));
        setIsLoading(false);
        //   return () => {
        //     setdata([]);
        //   }
    }, []);
    const showModal = () => {};
    if (isLoading) {
        return <div> Loading .....</div>;
    }
    return (
        <div className="w-full grid place-items-center py-8 gap-4 grid-cols-1 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {Array.isArray(data) ? (
                data.map((item, index) => <Card key={index} data={item} popupFunc={showModal} />)
            ) : (
                <div> wow its empty</div>
            )}
        </div>
    );
}

export default CardContainer;
