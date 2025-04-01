import React from "react";
import Link from "next/link"; // Import Next.js Link component

type LogoProps = {
    className?: string; // To allow custom styles
    size?: number; // Optional size for width and height
};

const Logo: React.FC<LogoProps> = ({ className = "", size = 200 }) => {
    return (
        <Link href="/" passHref>
            <div
                className={`flex items-center justify-center ${className} cursor-pointer`}
                style={{ width: size * 2, height: size / 2 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 100"
                    fill="none"
                    className="w-full h-full"
                    role="img"
                    aria-labelledby="logo-title"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <title id="logo-title">Alvin&apos;s Todo App Logo</title>

                    {/* Icon: Two overlapping rectangles (representing tasks) */}
                    <rect
                        x="30"
                        y="35"
                        width="60"
                        height="30"
                        className="fill-green-600"
                    />
                    <rect
                        x="45"
                        y="20"
                        width="60"
                        height="30"
                        className="fill-green-400"
                    />

                    {/* Checkmark */}
                    <path
                        d="M120 50 l15 15 l30 -40"
                        className="stroke-green-600 stroke-[5px] fill-none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Text: App Title */}
                    <text
                        x="170"
                        y="62"
                        className="fill-green-900 text-[28px] font-bold"
                        fontFamily="Arial, sans-serif"
                    >
                        Alvin&apos;s Todo
                    </text>

                    {/* Tagline beneath the title */}
                    <text
                        x="170"
                        y="80"
                        className="fill-green-700 text-[14px] font-medium"
                        fontFamily="Arial, sans-serif"
                    >
                        Organize Your Day
                    </text>
                </svg>
            </div>
        </Link>
    );
};

export default Logo;