'use client';

import React, { useState } from "react";
import Header from "@/components/Header";

const ProfilePage: React.FC = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <Header />

            {/* Tab Navigation */}
            <main className="flex-grow px-8 py-6">
                <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-600 mt-4">
                    Manage your account information and settings below:
                </p>

                {/* Tabs */}
                <div className="mt-6">
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`py-2 px-4 text-sm font-bold cursor-pointer ${
                                activeTab === "profile"
                                    ? "border-b-2 border-green-600 text-green-600"
                                    : "text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab("settings")}
                            className={`py-2 px-4 text-sm font-bold cursor-pointer ${
                                activeTab === "settings"
                                    ? "border-b-2 border-green-600 text-green-600"
                                    : "text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            Account Settings
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-6 bg-white shadow rounded-lg p-6">
                    {activeTab === "profile" && (
                        <div>
                            {/* Profile Content */}
                            <div className="flex items-center space-x-6">
                                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                    {/* Placeholder for profile picture */}
                                    <span>👤</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        John Doe
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        johndoe@example.com
                                    </p>
                                </div>
                            </div>
                            {/* Edit Profile Button */}
                            <div className="mt-6 text-right">
                                <a
                                    href="/edit-profile"
                                    className="text-green-600 font-bold hover:underline"
                                >
                                    Edit Profile
                                </a>
                            </div>
                        </div>
                    )}

                    {activeTab === "settings" && (
                        <div>
                            {/* Account Settings */}
                            <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>
                            <form>
                                {/* Change Password */}
                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-gray-700">
                                        Change Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                                    />
                                </div>

                                {/* Save Changes */}
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-700"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;