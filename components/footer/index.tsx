import Image from "next/image";

import logo from "@/ressources/smallBg.jpg";

function Footer() {
    const imageSize = {
        width: 35,
        height: 35,
    };
    return (
        <footer className="bg-slate-900 text-gray-100 w-screen">
            <div className="flex-col bg-inherit md:flex-row justify-around w-full py-4 gap-4 flex items-center">
                <div className="flex flex-col bg-inherit mb-8">
                    <span className="flex items-center py-2">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={25}
                            height={25}
                            objectFit="cover"
                            className="rounded"
                        />
                        <h2 className="font-bold text-2xl">Yaes</h2>
                    </span>
                    <p>Shoping is now easier than ever.</p>
                </div>
                <div className="flex flex-col sm:flex-row bg-inherit justify-between">
                    <ul className="mb-4 mr-8 sm:mb-0">
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                About Us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                Blog
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <ul className="mb-4 sm:mb-0">
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                Help Center
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                Terms of Service
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col px-8 py-2 bg-inherit">
                <span className="text-gray-300">Follow Us</span>
                <div className="flex mt-2">
                    <a href="#" className="mr-3 text-gray-300 hover:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={imageSize.width}
                            height={imageSize.height}
                            fill="#1877f2"
                        >
                            <path d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9.34v-7.01H9V10.24h3.34V8.01c0-3.31 2.01-5.13 4.97-5.13 1.42 0 2.65.11 3 .16V7h-2.05c-1.62 0-1.94.77-1.94 1.91V9.99H18l-.25 1.75h-2.75V21h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                        </svg>
                    </a>
                    <a href="#" className="mr-3 text-gray-300 hover:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={imageSize.width}
                            height={imageSize.height}
                            fill="#1da1f2"
                        >
                            <path d="M22.46 6c-.81.36-1.68.61-2.6.72a4.62 4.62 0 0 0 2.06-2.54c-.9.53-1.9.92-2.96 1.13a4.64 4.64 0 0 0-7.92 4.22C6.32 8.72 3.46 6.24 2 3 1.67 3.75 1.45 4.58 1.45 5.46a4.63 4.63 0 0 0 2.07 3.87c-.9-.09-1.74-.28-2.47-.56v.07a4.65 4.65 0 0 0 3.72 4.54c-.67.18-1.38.19-2.06.05a4.66 4.66 0 0 0 4.34 3.24 9.35 9.35 0 0 1-5.77 1.98A9.72 9.72 0 0 1 2 18.18 13.21 13.21 0 0 0 7.18 20c8.56 0 13.26-7.1 13.26-13.26 0-.2 0-.4-.02-.6.91-.65 1.7-1.46 2.33-2.38z" />
                        </svg>
                    </a>
                    <a href="#" className="mr-3 text-gray-300 hover:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={imageSize.width}
                            height={imageSize.height}
                            fill="#bc2a8d"
                        >
                            <rect width="14" height="14" x="5" y="5" rx="2" ry="2" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={imageSize.width}
                            height={imageSize.height}
                            fill="#0077b5"
                        >
                            <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8 18H5V8h3v10zM6.5 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM19 18h-3v-4c0-1.55-1.09-2.25-2.5-2.25s-2.5.7-2.5 2.25v4H8V8h3v1.26c0-.34.03-.67.1-1H11V7.5c0-1.32.28-2.5 2-2.5s2 1.18 2 2.5V12h3v6z" />
                        </svg>
                    </a>
                </div>
            </div>
            <hr className="mr-32 ml-4" />
            <div className="m-2 px-4 text-gray-400">
                Copyright © 2023 YAES. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
