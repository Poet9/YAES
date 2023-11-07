import Link from "next/link";

export default function Nav({ className = "", ...props }) {
    return (
        <nav>
            <ul className={`flex flex-col border-1 md:flex-row mx-2 gap-6 ${className || ""}`}>
                <li className="text-base p-2 border-b-2 border-transparent hover:border-current">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-base p-2 border-b-2 border-transparent hover:border-current">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-base p-2 border-b-2 border-transparent hover:border-current">
                    <Link href="/community">Community</Link>
                </li>
            </ul>
        </nav>
    );
}
