import Link from "next/link";

export default function Nav() {
    return (
        <nav className="container flex items-center justify-between">
            <ul className="flex mx-2 gap-6">
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
