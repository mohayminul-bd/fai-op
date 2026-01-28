import React from "react";
import {
  Search,
  ChevronDown,
  Phone,
  Clock,
  PlayCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

const CallLogs = () => {
  return (
    <div className="p-6 bg-[#0B1121] min-h-screen text-white font-sans">
      {/* ১. টপ ফিল্টার বার */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div className="relative flex-1 min-w-[300px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-[#162031] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <FilterDropdown label="All Type" />
          <FilterDropdown label="All Issues" />
          <FilterDropdown label="Today" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ২. বাম পাশের কল লিস্ট (Column 5) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Call List</h3>
          <CallListItem
            number="+1 (555) 345-6789"
            date="2025-12-16 • 09:42 AM"
            status="AI Resolved"
            statusColor="text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
            tags={["Quote Provided", "Screen"]}
          />
          <CallListItem
            number="+1 (555) 345-6789"
            date="2025-12-16 • 09:42 AM"
            status="Warm Transfer"
            statusColor="text-orange-500 bg-orange-500/10 border-orange-500/20"
            tags={["Escalated to technician", "Software"]}
          />
          <CallListItem
            number="+1 (555) 345-6789"
            date="2025-12-16 • 09:42 AM"
            status="Appointment"
            statusColor="text-blue-500 bg-blue-500/10 border-blue-500/20"
            tags={["Appointment Booked", "Battery"]}
          />
          <CallListItem
            number="+1 (555) 345-6789"
            date="2025-12-16 • 09:42 AM"
            status="Dropped"
            statusColor="text-red-500 bg-red-500/10 border-red-500/20"
            tags={["Call Dropped", "Unknown"]}
          />
        </div>

        {/* ৩. ডান পাশের কল ডিটেইলস (Column 7) */}
        <div className="lg:col-span-7 bg-[#162031] rounded-2xl border border-gray-800 p-6 self-start">
          <h3 className="text-lg font-semibold mb-6">Call Details</h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
            <DetailItem label="Phone Number" value="+1 (555) 123-4567" />
            <DetailItem label="Duration" value="4:32" />
            <DetailItem label="Date & Time" value="2025-12-16 10:45 AM" />
            <DetailItem label="Issue Type" value="Screen" />
          </div>

          <div className="mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Call Type
            </p>
            <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              AI Resolved
            </span>
          </div>

          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Outcome
            </p>
            <p className="text-sm text-gray-200">Quote provided</p>
          </div>

          <button className="w-full bg-[#3D2B56] hover:bg-[#4D3B66] text-purple-200 py-3 rounded-xl flex items-center justify-center gap-2 transition mb-8 border border-purple-500/20">
            <PlayCircle size={20} />
            <span>Play Audio Recording</span>
          </button>

          {/* ট্রান্সক্রিপ্ট সেকশন */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <FileText size={18} />
              <h4 className="text-sm font-medium">Conversation Transcript</h4>
            </div>

            <div className="bg-[#0B1121]/50 rounded-xl p-4 space-y-4 border border-gray-800">
              <TranscriptLine
                speaker="AI Assistant"
                text="Thank you for calling iBreakUFix! How can I help you today?"
                isAI
              />
              <TranscriptLine
                speaker="Customer"
                text="Hi, my iPhone 13 screen is cracked. How much would it cost to repair?"
              />
              <TranscriptLine
                speaker="AI Assistant"
                text="I can help you with that! For an iPhone 13 screen repair, our price is $189. This includes parts, labor, and comes with a 90-day warranty."
                isAI
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ছোট ছোট কম্পোনেন্টগুলো নিচে ---

const FilterDropdown = ({ label }) => (
  <button className="flex items-center gap-2 bg-[#162031] border border-gray-800 px-4 py-2 rounded-xl text-sm hover:bg-[#1E293B] transition">
    {label} <ChevronDown size={14} className="text-gray-500" />
  </button>
);

const CallListItem = ({ number, date, status, statusColor, tags }) => (
  <div className="bg-[#162031] p-4 rounded-2xl border border-gray-800 hover:border-gray-600 transition cursor-pointer group">
    <div className="flex justify-between items-start mb-3">
      <div className="flex gap-3 items-center">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Phone size={16} className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-sm">{number}</h4>
          <p className="text-[10px] text-gray-500">{date}</p>
        </div>
      </div>
      <span
        className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${statusColor}`}
      >
        {status}
      </span>
    </div>
    <div className="flex gap-2 items-center text-[11px]">
      <div className="flex items-center gap-1 text-gray-400">
        <Clock size={12} /> <span>5:23</span>
      </div>
      <div className="flex items-center gap-1 text-gray-400">
        <CheckCircle2 size={12} /> <span>{tags[0]}</span>
      </div>
      <span className="bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded uppercase text-[9px] font-bold tracking-tighter">
        {tags[1]}
      </span>
    </div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
      {label}
    </p>
    <p className="text-sm font-medium text-gray-200">{value}</p>
  </div>
);

const TranscriptLine = ({ speaker, text, isAI }) => (
  <div className="text-xs">
    <span
      className={`font-bold block mb-1 ${isAI ? "text-emerald-500" : "text-blue-400"}`}
    >
      {speaker}:
    </span>
    <p className="text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export default CallLogs;
