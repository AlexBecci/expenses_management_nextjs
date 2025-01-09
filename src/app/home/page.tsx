'use client'
import { Sidebar } from "../components/Sidebar";

export default function HomePage() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
        </div>
      </main>
    </div>
  );
}