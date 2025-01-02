import { Sidebar } from "../components/Sidebar";
import { MetricCard } from "./components/MetricCard";
import { OverviewChart } from "./components/OverviewChart";
import { RecentTransactions } from "./components/RecentTransactions";

export default function HomePage() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-300 mb-6">Dashboard</h1>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricCard title="Total Balance" value="$45,231.89" />
            <MetricCard title="Monthly Income" value="$5,231.89" />
            <MetricCard title="Monthly Expenses" value="$3,231.89" />
            <MetricCard title="Total Debt" value="$12,231.89" />
          </div>

          {/* Charts and Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <OverviewChart />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
}