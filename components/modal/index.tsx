import React from "react";
import { isFunctionDeclaration } from "typescript";

function Modal({
    id,
    title,
    hidden,
    children,
    onClose,
    ...props
}: {
    id: string;
    title: string;
    hidden: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    const handleClose = (e: any) => {
        if (e.target.id !== id) return;
        onClose();
    };
    if (hidden) return null;
    return (
        <div
            id={id}
            aria-hidden="true"
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}
        >
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700 text-black">
                    <div className="flex items-start justify-between p-4 border-b rounded-t  dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button
                            type="button"
                            onClick={() => onClose()}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6 flex justify-end">
                        {children ? children : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
