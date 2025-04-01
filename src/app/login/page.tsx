// File: LoginPage.tsx
import React from "react";
import Logo from "../../components/Logo";

const LoginPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Logo */}
            <div className="mb-8">
                <Logo size={150} />
            </div>

            {/* Login Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-md">
                <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">Log in to your account</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 text-gray-900 bg-gray-50 text-base"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2 text-gray-900 bg-gray-50 text-base"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Log in
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-green-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;