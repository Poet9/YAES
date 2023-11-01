"use client";
import { fetchCards } from "./data";
import Card from "./card";
import { useEffect, useState } from "react";

function CardContainer({ searchQuery, ...props }: { searchQuery: string }) {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetchCards(process.env.NEXT_PUBLIC_MOCK_API).then((resData) => setdata(resData));
        console.log("fetching products card....");
        //   return () => {
        //     setdata([]);
        //   }
    }, [searchQuery]);
    return (
        <div className="w-full grid place-items-center py-8 gap-4 grid-cols-1 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
}

export default CardContainer;
