import React from "react";
import {
  Phone,
  UserCheck,
  ArrowRightLeft,
  Calendar,
  OctagonAlert,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// চার্টের জন্য ডামি ডাটা
const chartData = [
  { name: "Mon", calls: 45 },
  { name: "Tue", calls: 62 },
  { name: "Wed", calls: 58 },
  { name: "Thu", calls: 75 },
  { name: "Fri", calls: 90 },
  { name: "Sat", calls: 95 },
  { name: "Sun", calls: 55 },
];

const DashboardMain = () => {
  return (
    <div className="p-6 bg-[#0B1121] min-h-screen text-white font-sans">
      {/* ১. টপ স্ট্যাট কার্ডস (৬টি কার্ড) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
          icon={<Phone size={20} />}
          iconBg="bg-blue-500"
        />
        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+77%"
          icon={<UserCheck size={20} />}
          iconBg="bg-purple-500"
        />
        <StatCard
          title="Warm Transfer"
          value="23"
          change="+18%"
          icon={<ArrowRightLeft size={20} />}
          iconBg="bg-orange-500"
        />
        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
          icon={<Calendar size={20} />}
          iconBg="bg-emerald-500"
        />
        <StatCard
          title="Missed/Failed Calls"
          value="6"
          change="-3%"
          icon={<OctagonAlert size={20} />}
          iconBg="bg-red-500"
          isNegative
        />
        <StatCard
          title="Avg Call Duration"
          value="3:42"
          change="+15%"
          icon={<Clock size={20} />}
          iconBg="bg-blue-600"
        />
      </div>

      {/* ২. কল ট্রেন্ডস চার্ট সেকশন */}
      <div className="bg-[#162031] p-6 rounded-2xl mb-6 border border-gray-800">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold">Call Trends - This Week</h3>
            <p className="text-sm text-gray-500">Total: 472 calls</p>
          </div>
          <select className="select select-sm bg-[#1E293B] border-none text-xs">
            <option>This Week</option>
          </select>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#1E293B"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#162031", border: "none" }}
              />
              <Area
                type="monotone"
                dataKey="calls"
                stroke="#3B82F6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorCalls)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ৩. নিচের দুটি সেকশন (Activity & Repair Requests) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-[#162031] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <ActivityItem
              dotColor="bg-emerald-500"
              title="AI booked appointment for iPhone 13 screen repair"
              time="2 min ago"
            />
            <ActivityItem
              dotColor="bg-orange-500"
              title="Warm transfer to technician - Software Issue"
              time="5 min ago"
            />
            <ActivityItem
              dotColor="bg-emerald-500"
              title="Quote provided for iPad battery replacement"
              time="8 min ago"
            />
            <ActivityItem
              dotColor="bg-red-500"
              title="Call dropped after 12 seconds"
              time="15 min ago"
            />
          </div>
        </div>

        {/* Top Repair Requests */}
        <div className="bg-[#162031] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Top Repair Requests</h3>
          <div className="space-y-5">
            <ProgressItem
              label="Screen Repair"
              value={158}
              color="bg-cyan-400"
            />
            <ProgressItem
              label="Battery Replacement"
              value={89}
              color="bg-cyan-500"
            />
            <ProgressItem
              label="Back Glass Repair"
              value={67}
              color="bg-cyan-600"
            />
            <ProgressItem
              label="Software Issues"
              value={45}
              color="bg-cyan-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// সাব-কম্পোনেন্ট: স্ট্যাট কার্ড
const StatCard = ({ title, value, change, icon, iconBg, isNegative }) => (
  <div className="bg-[#162031] p-5 rounded-2xl border border-gray-800 flex justify-between items-start">
    <div>
      <p className="text-gray-400 text-xs font-medium mb-1">{title}</p>
      <h2 className="text-2xl font-bold mb-1">{value}</h2>
      <span
        className={`text-xs font-medium ${isNegative ? "text-red-500" : "text-emerald-500"}`}
      >
        {change}
      </span>
    </div>
    <div className={`${iconBg} p-2.5 rounded-xl text-white shadow-lg`}>
      {icon}
    </div>
  </div>
);

// সাব-কম্পোনেন্ট: অ্যাক্টিভিটি আইটেম
const ActivityItem = ({ dotColor, title, time }) => (
  <div className="bg-[#1E293B]/40 p-3 rounded-xl flex items-start gap-3">
    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${dotColor}`}></div>
    <div className="flex-1">
      <p className="text-sm text-gray-200 leading-tight">{title}</p>
      <p className="text-[10px] text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

// সাব-কম্পোনেন্ট: প্রগ্রেস বার
const ProgressItem = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-xs mb-1.5">
      <span className="text-gray-300">{label}</span>
      <span className="text-gray-500">{value} requests</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-1.5">
      <div
        className={`${color} h-1.5 rounded-full`}
        style={{ width: `${(value / 200) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default DashboardMain;
