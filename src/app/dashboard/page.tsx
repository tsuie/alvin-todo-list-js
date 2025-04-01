export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-lg font-bold border-b border-gray-700">
                    Dashboard
                </div>
                <nav className="flex-grow p-4">
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block p-2 rounded hover:bg-gray-700"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block p-2 rounded hover:bg-gray-700"
                            >
                                Analytics
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block p-2 rounded hover:bg-gray-700"
                            >
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <a
                        href="#"
                        className="block p-2 rounded hover:bg-gray-700 text-red-400"
                    >
                        Logout
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow bg-gray-100 p-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-600">Welcome to the Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example Cards */}
                    <div className="p-4 bg-white shadow rounded">
                        <h2 className="text-lg font-semibold text-gray-600">Card 1</h2>
                        <p className="text-gray-600">Content goes here.</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h2 className="text-lg font-semibold text-gray-600">Card 2</h2>
                        <p className="text-gray-600">Content goes here.</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h2 className="text-lg font-semibold text-gray-600">Card 3</h2>
                        <p className="text-gray-600">Content goes here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}