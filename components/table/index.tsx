"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { forwardRef, useState } from "react";
import Modal from "@/components/modal";
import Form from "@/components/form";
import { Input } from "../input";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(function TableC(
    { children, ...props },
    ref
) {
    const [showCreateCategory, setshowCreateCategory] = useState(false);
    const [loading, setloading] = useState(false);
    const formSubmitHandler = (e: any) => {
        e.preventDefault();
        setloading(true);
        console.log("wow new category bsahtek ");
        setloading(false);
    };
    return (
        <>
            <table className="border-separate my-4 mx-auto backdop rounded w-[500px] md:w-10/12 xl:w-8/12 border-spacing-2 border border-slate-500 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-600 py-3">ID</th>
                        <th className="border border-slate-600 ">Name</th>
                        <th className="border border-slate-600 ">Description</th>
                        <th className="border border-slate-600 w-4 ">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-slate-600/50 cursor-pointer">
                        <td className="border p-3 border-slate-700 "></td>
                        <td className="border p-3 border-slate-700 "></td>

                        <td className="border p-3 border-slate-700 "></td>
                        <td
                            className="border p-3  border-slate-700 hover:bg-slate-600/75 cursor-pointer "
                            onClick={() => setshowCreateCategory(true)}
                        >
                            <PlusIcon className="w-7 h-7 text-rose-500 " />
                        </td>
                    </tr>
                    {children ? children : null}
                </tbody>
            </table>
            <Modal
                title="Create a category"
                hidden={!showCreateCategory}
                onClose={() => setshowCreateCategory(false)}
            >
                <Form
                    className=""
                    id="category_form"
                    name="new category"
                    submit={formSubmitHandler}
                >
                    <Input
                        id="categoryName"
                        type="text"
                        placeholder="category name..."
                        className="col-span-2"
                        required
                    />
                    <Input
                        id="categoryDesc"
                        type="text"
                        placeholder="category description..."
                        className="mr-1"
                        required
                    />
                    <button
                        type="submit"
                        className="py-4 text-base rounded-md w-full bg-blue-400 hover:bg-blue-500 text-white "
                        disabled={loading}
                    >
                        <p className="flex justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 color-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>{" "}
                            processing...
                        </p>
                    </button>
                </Form>
            </Modal>
        </>
    );
});

export default Table;
