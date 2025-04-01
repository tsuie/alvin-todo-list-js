// File: components/Header.tsx
import React from "react";
import Logo from "../Logo"; // Path to Logo component

const Header: React.FC = () => {
    return (
        <header className="bg-white w-full shadow py-4 px-8 flex items-center justify-between">
            <Logo size={120} />
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="/dashboard"
                            className="text-green-600 font-bold hover:underline"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="/profile"
                            className="text-green-600 font-bold hover:underline"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="/logout"
                            className="text-red-600 font-bold hover:underline"
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;