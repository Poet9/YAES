"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";

type RowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
    rowData: { id: string; name: string; description: string };
};

const Row = forwardRef<HTMLTableRowElement, RowProps>(function RowBody(
    { rowData, children, ...props },
    ref
) {
    const getCategoryPage = (id: string) => {};
    const deleteRowHandler = async (id: string) => {};
    return (
        <>
            <tr
                className="hover:bg-slate-600/50 cursor-pointer"
                onClick={() => getCategoryPage(rowData.id)}
            >
                <td className="border p-3 border-slate-700 ">{rowData.id}</td>
                <td className="border p-3 border-slate-700 ">{rowData.name}</td>

                <td className="border p-3 border-slate-700 ">{rowData.description}</td>
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
