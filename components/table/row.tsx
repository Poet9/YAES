"use client";
import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import { deleteRow } from "./helper";
import Link from "next/link";

type RowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
    rowData: { id: string; name: string; description: string };
};

const Row = forwardRef<HTMLTableRowElement, RowProps>(function RowBody(
    { rowData, children, ...props },
    ref
) {
    const router = useRouter();
    const getCategoryPage = (id: string) => {};
    const deleteRowHandler = async (id: string) => {
        await deleteRow(id);
        router.refresh();
    };
    return (
        <>
            <tr
                className="hover:bg-slate-600/50 cursor-pointer"
                onClick={() => getCategoryPage(rowData.id)}
            >
                <td>
                    <Link
                        href={`/dashboard/${rowData.id}`}
                        className="flex justify-between border align-center p-3 border-slate-700 "
                    >
                        <ChevronRightIcon className="h-7 w-7 " />
                        {rowData.id}
                    </Link>
                </td>
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
