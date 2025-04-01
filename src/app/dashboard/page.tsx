// File: Dashboard.tsx
import React from "react";
import Header from "@/components/Header";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow px-8 py-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome, John Doe!</h1>
                <p className="text-gray-600 mt-4">
                    Here's an overview of your tasks and progress:
                </p>

                {/* Dashboard Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Example Card 1 */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800">
                            Completed Tasks
                        </h2>
                        <p className="text-gray-600 mt-2">15</p>
                    </div>

                    {/* Example Card 2 */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800">
                            Pending Tasks
                        </h2>
                        <p className="text-gray-600 mt-2">5</p>
                    </div>

                    {/* Example Card 3 */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-bold text-gray-800">
                            Productivity Score
                        </h2>
                        <p className="text-gray-600 mt-2">80%</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;