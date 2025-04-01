import React from "react";
import Logo from "../components/Logo"; // No need to specify the file; "index.ts" is automatically picked up

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
        {/* Header Section / Branding */}
        <header className="flex flex-col items-center justify-center text-center mb-12">
          <Logo className="w-36 h-36" size={144} />

          <h1 className="text-4xl font-bold text-gray-800 mt-6">
            Alvin&apos;s Todo List App
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Your ultimate companion for staying organized and productive.
            Plan, track, and accomplish your tasks with ease and efficiency!
          </p>
        </header>

        {/* Main Content Section */}
        <main className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-4xl">
          {/* Features Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Alvin&apos;s Todo List App?
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>✅ Easy-to-use interface for task management</li>
              <li>✅ Organize your tasks with categories and deadlines</li>
              <li>✅ Stay focused with notifications and reminders</li>
              <li>✅ Accessible anywhere, anytime on any device</li>
            </ul>
          </div>

          {/* Call-to-Action Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get Started Today!
            </h2>
            <div className="flex flex-col w-full space-y-4">
              <a
                  href="/login"
                  className="w-full py-3 bg-blue-500 text-white text-lg font-semibold text-center rounded-lg hover:bg-blue-600 transition-colors"
              >
                Login
              </a>
              <a
                  href="/signup"
                  className="w-full py-3 bg-green-500 text-white text-lg font-semibold text-center rounded-lg hover:bg-green-600 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Alvin&apos;s Todo List App. All rights reserved.
          </p>
        </footer>
      </div>
  );
}