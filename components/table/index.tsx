"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { forwardRef, useState } from "react";
import Modal from "@/components/modal";
import Form from "@/components/form";
import { Input } from "../input";
import { newCategory, newProduct } from "./helper";
import { useRouter } from "next/navigation";
import { SingleImageDropzone } from "../input/imgInput";
import { useEdgeStore } from "@/lib/edgestore";

type TableProps = {
    tableFor: string;
} & React.TableHTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(function TableC(
    { tableFor = "", children, ...props },
    ref
) {
    const router = useRouter();
    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();
    const [showCreateCategory, setshowCreateCategory] = useState(false);
    const [loading, setloading] = useState(false);
    const numberInputHandler = (e: any) => {
        try {
            const value = e.target.value;
            e.target.value = value.replace(/[^0-9.]/g, "");
        } catch (e) {
            console.log(Math.floor(Math.random() * 100));
        }
    };
    const formSubmitHandler = async (e: any) => {
        e.preventDefault();
        setloading(true);

        if (tableFor !== "category" && tableFor !== "product") {
            return setshowCreateCategory(false);
        }
        if (tableFor === "category") {
            const category = {
                name: e.target.querySelectorAll("input")[0].value,
                description: e.target.querySelectorAll("input")[1].value,
            };
            await newCategory(category);
        } else {
            if (!file) return;
            const res = await edgestore.myPublicImages.upload({ file });
            // you can run some server action or api here
            // to add the necessary data to your database
            const fullUrl = window.location.pathname.split("/");
            const productData = {
                name: e.target.querySelectorAll("input")[0].value,
                description: e.target.querySelectorAll("input")[1].value,
                img: [res.url],
                price: parseFloat(e.target.querySelectorAll("input")[3].value),
                product_categoryId: parseInt(fullUrl[fullUrl.length - 1]),
            };
            await newProduct(productData);
        }
        router.refresh();
        setFile(undefined);
        setloading(false);
        setshowCreateCategory(false);
    };
    return (
        <>
            <table className="border-separate my-4 mx-auto backdop rounded w-[500px] md:w-10/12 xl:w-8/12 border-spacing-2 border border-slate-500 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-600 py-3">ID</th>
                        <th className="border border-slate-600 ">Name</th>
                        <th className="border border-slate-600 ">Description</th>
                        {tableFor === "product" && (
                            <th className="border border-slate-600 ">Price</th>
                        )}
                        <th className="border border-slate-600 w-4 ">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-slate-600/50 cursor-pointer">
                        <td className="border p-3 border-slate-700 "></td>
                        <td className="border p-3 border-slate-700 "></td>

                        {tableFor === "product" && (
                            <td className="border p-3 border-slate-700 "></td>
                        )}
                        <td className="border p-3 border-slate-700 "></td>
                        <td
                            className="border p-3  border-slate-700 hover:bg-slate-600/75 cursor-pointer "
                            onClick={() => setshowCreateCategory(true)}
                        >
                            <PlusIcon className="w-7 h-7 hover:text-zinc-200" />
                        </td>
                    </tr>
                    {children ? children : null}
                </tbody>
            </table>
            <Modal
                title={`Create a ${tableFor}`}
                hidden={!showCreateCategory}
                onClose={() => setshowCreateCategory(false)}
            >
                <Form
                    className="flex flex-col"
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
                        autoFocus
                    />
                    <Input
                        id="categoryDesc"
                        type="text"
                        placeholder="category description..."
                        className="my-2"
                        required
                    />
                    {tableFor === "product" && (
                        <>
                            <SingleImageDropzone
                                width={200}
                                height={200}
                                value={file}
                                dropzoneOptions={{ maxSize: 1024 * 1024 * 1 }}
                                onChange={(file) => {
                                    setFile(file);
                                }}
                            />
                            <Input
                                id="prod_price"
                                placeholder="price..."
                                className="my-2"
                                onChange={numberInputHandler}
                                required
                            />
                        </>
                    )}
                    <button
                        type="submit"
                        className="py-4 text-base rounded-md w-full bg-blue-400 hover:bg-blue-500 text-white "
                        disabled={loading}
                    >
                        {loading ? (
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
                        ) : (
                            "CREATE CATEGORY"
                        )}
                    </button>
                </Form>
            </Modal>
        </>
    );
});

export default Table;
