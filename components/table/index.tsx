"use client";
import { forwardRef } from "react";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(function TableC(
    { children, ...props },
    ref
) {
    return (
        <table className="border-separate my-4 mx-auto backdop rounded w-[500px] md:w-10/12 xl:w-8/12 border-spacing-2 border border-slate-500 ...">
            <thead>
                <tr>
                    <th className="border border-slate-600 py-3">ID</th>
                    <th className="border border-slate-600 ">Name</th>
                    <th className="border border-slate-600 ">Description</th>
                    <th className="border border-slate-600 w-4 ">Delete</th>
                </tr>
            </thead>
            <tbody>{children ? children : null}</tbody>
        </table>
    );
});

export default Table;
