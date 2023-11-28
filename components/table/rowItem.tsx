/* eslint-disable @next/next/no-img-element */
"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import { deleteRow, deleteProduct } from "./helper";

type RowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
    rowData: {
        id: string;
        name: string;
        description: string;
        img: string[];
        price: number | string;
    };
};

const Row = forwardRef<HTMLTableRowElement, RowProps>(function RowBody(
    { rowData, children, ...props },
    ref
) {
    const router = useRouter();
    const getCategoryPage = (id: string) => {};
    const deleteRowHandler = async (id: string) => {
        await deleteProduct(id);
        router.refresh();
    };
    return (
        <>
            <tr
                className="hover:bg-slate-600/50 cursor-pointer"
                onClick={() => getCategoryPage(rowData.id)}
            >
                <td className="border p-3 border-slate-700 ">
                    <img src={rowData.img[0]} alt="" className="h-10 w-8 object-fit" />
                </td>
                <td className="border p-3 border-slate-700 ">{rowData.name}</td>
                <td className="border p-3 border-slate-700 ">{rowData.description}</td>
                <td className="border p-3 border-slate-700 ">{rowData.price}$</td>
                <td
                    className="border p-3  border-slate-700 hover:bg-slate-600/75 cursor-pointer "
                    onClick={() => deleteRowHandler(rowData.id)}
                >
                    <TrashIcon className="w-7 h-7 text-rose-500 " />
                </td>
            </tr>
        </>
    );
});

export default Row;
