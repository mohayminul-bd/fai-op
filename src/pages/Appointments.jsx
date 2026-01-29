import React from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Appointments = () => {
  const appointmentData = Array(6).fill({
    name: "Jann. D",
    phone: "01960685785",
    email: "admin@gmail.com",
    device: "Apple(Iphone 13pro)",
    type: "Screen",
    date: "02/06/2026",
    slot: "1",
    time: "09:00",
  });

  return (
    <div className="p-6 bg-[#0B1121] min-h-screen text-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AppointmentStatCard
          title="Total Booked"
          value="34"
          subtext="+8% this week"
          icon={<Calendar size={20} />}
          iconColor="text-blue-400"
        />
        <AppointmentStatCard
          title="AI Booked"
          value="28"
          subtext="82% of total"
          icon={<CheckCircle2 size={20} />}
          iconColor="text-emerald-400"
        />
        <AppointmentStatCard
          title="Pending"
          value="3"
          subtext="Awaiting confirmation"
          icon={<Clock size={20} />}
          iconColor="text-amber-400"
        />
      </div>

      <div className="bg-[#162031] p-6 rounded-2xl border border-gray-800 mb-8">
        <h3 className="text-sm font-medium mb-4 text-gray-300">Booking Link</h3>
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value="https://techstore.com/book?id=store123"
            className="flex-1 bg-[#0B1121] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-400 outline-none"
          />
          <button className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#2D3A4F] px-6 py-3 rounded-xl border border-gray-700 transition">
            <Copy size={18} />
            <span className="font-medium text-sm">Copy Link</span>
          </button>
        </div>
      </div>

      <div className="bg-[#162031] rounded-2xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-xs md:text-sm">
            <thead className="bg-[#1E293B]/50 border-b border-gray-800">
              <tr className="text-gray-400 font-medium">
                <th className="py-4">Client Name</th>
                <th>Client Phone</th>
                <th>Client Email</th>
                <th>Device</th>
                <th>Repair Type</th>
                <th>Date</th>
                <th>Slot no</th>
                <th>Start Time</th>
              </tr>
            </thead>

            <tbody>
              {appointmentData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800/50 bg-gray-800"
                >
                  <td className="py-4 text-blue-400 font-medium underline cursor-pointer">
                    {item.name}
                  </td>
                  <td className="text-gray-300">{item.phone}</td>
                  <td className="text-gray-300">{item.email}</td>
                  <td className="text-gray-300">{item.device}</td>
                  <td className="text-gray-300">{item.type}</td>
                  <td className="text-gray-300">{item.date}</td>
                  <td className="text-gray-300">{item.slot}</td>
                  <td className="text-gray-300">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-2 py-6">
          <button className="btn btn-ghost btn-sm text-gray-500 flex items-center gap-1">
            <ChevronLeft size={16} /> Previous
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-lg text-sm bg-transparent text-gray-400">
              1
            </button>
            <button className="w-8 h-8 rounded-lg text-sm bg-blue-600 text-white shadow-lg shadow-blue-900/20">
              2
            </button>
            <button className="w-8 h-8 rounded-lg text-sm bg-transparent text-gray-400">
              3
            </button>
            <button className="w-8 h-8 rounded-lg text-sm bg-transparent text-gray-400">
              4
            </button>
            <button className="w-8 h-8 rounded-lg text-sm bg-transparent text-gray-400">
              5
            </button>
            <span className="text-gray-500 self-end mb-1">...</span>
            <button className="w-8 h-8 rounded-lg text-sm bg-transparent text-gray-400">
              11
            </button>
          </div>
          <button className="btn btn-ghost btn-sm text-blue-500 flex items-center gap-1">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentStatCard = ({ title, value, subtext, icon, iconColor }) => (
  <div className="bg-[#162031] p-5 rounded-2xl border border-gray-800">
    <div className="flex items-center gap-3 mb-3">
      <div className={`${iconColor} bg-white/5 p-2 rounded-lg`}>{icon}</div>
      <span className="text-xs font-medium text-gray-400">{title}</span>
    </div>
    <div className="flex items-baseline gap-3">
      <h2 className="text-3xl font-bold">{value}</h2>
      <span
        className={`text-[10px] ${title === "Pending" ? "text-amber-500" : "text-emerald-500"}`}
      >
        {subtext}
      </span>
    </div>
  </div>
);

export default Appointments;
