import React from "react";
import { Pie, Line } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Register required chart elements
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RevenueTrafficChart = () => {
  // Revenue Data (Pie Chart)
  const revenueData = {
    labels: ["Shirts", "Shoes", "Bags"],
    datasets: [
      {
        data: [45, 30, 25], // Example revenue percentage
        backgroundColor: ["#3B82F6", "#0D9488", "#9333EA"], // Blue, Teal, Purple
      },
    ],
  };

  // Traffic Data (Line Chart)
  const trafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Organic",
        data: [1200, 1500, 1100, 1800, 1700, 2000],
        borderColor: "#0D9488", // Teal
        backgroundColor: "rgba(13, 148, 136, 0.2)", // Light Teal
        fill: true,
      },
      {
        label: "Paid",
        data: [800, 900, 700, 1100, 1300, 1400],
        borderColor: "#9333EA", // Purple
        backgroundColor: "rgba(147, 51, 234, 0.2)", // Light Purple
        fill: true,
      },
    ],
  };

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2">
      {/* Revenue Chart */}
      <div className="min-w-0 min-h-[300px] max-h-[300px] p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Revenue</h4>
        <Pie data={revenueData} />
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full" />
            <span>Shirts</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
            <span>Shoes</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
            <span>Bags</span>
          </div>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="min-w-0 min-h-[300px] max-h-[300px] p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Traffic</h4>
        <Line data={trafficData} />
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
            <span>Organic</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
            <span>Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueTrafficChart;
