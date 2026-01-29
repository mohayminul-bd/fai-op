import React, { useState } from "react";
import { Camera } from "lucide-react";

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-8 bg-[#0B1121] min-h-screen text-white font-sans">
      <div className="flex gap-8 border-b border-gray-800 mb-8">
        <button className="pb-4 text-sm font-medium border-b-2 border-blue-500 text-blue-400">
          Profile
        </button>
        <button className="pb-4 text-sm font-medium text-gray-500">
          Password Settings
        </button>
      </div>

      <div className="max-w-4xl">
        <h3 className="text-gray-400 text-sm mb-4">Profile Image</h3>

        <div className="relative w-20 h-20 mb-10">
          <img
            src="https://i.pravatar.cc/150?u=jane"
            className="w-full h-full rounded-full border-2 border-gray-700 object-cover"
            alt="Profile"
          />

          <button
            onClick={() => setIsEditing(true)}
            className="absolute bottom-0 right-0 bg-[#1E293B] p-1.5 rounded-lg border border-gray-600 text-blue-400 shadow-lg"
          >
            <Camera size={14} />
          </button>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="absolute left-24 top-1/2 -translate-y-1/2 bg-[#1E293B] border cursor-pointer hover:bg-gray-500 border-gray-700 px-4 py-1 rounded-full text-[10px] text-gray-300 whitespace-nowrap"
            >
              Edit Profile
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <InputGroup
                label="Full Name"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
              />
              <InputGroup
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              <InputGroup
                label="Store Name"
                name="storeName"
                value={profile.storeName}
                onChange={handleChange}
              />
              <InputGroup
                label="Store Address"
                name="storeAddress"
                value={profile.storeAddress}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleSave}
                className="w-full md:w-80 bg-[#00C853] hover:bg-[#00A846] text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-emerald-900/20"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-xl">
            <ViewField
              label="Full Name:"
              value={profile.fullName}
              isHighlight
            />
            <ViewField label="Email:" value={profile.email} />
            <ViewField label="Store Name:" value={profile.storeName} />
            <ViewField label="Store Address:" value={profile.storeAddress} />
          </div>
        )}
      </div>
    </div>
  );
};

const InputGroup = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-gray-300">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="bg-[#0B1121] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
    />
  </div>
);

const ViewField = ({ label, value, isHighlight }) => (
  <div className="flex items-center py-4 border-b border-gray-800/30">
    <span
      className={`w-32 text-sm font-semibold ${isHighlight ? "text-blue-400 underline underline-offset-4" : "text-gray-400"}`}
    >
      {label}
    </span>
    <span className="text-sm text-gray-200">{value}</span>
  </div>
);

export default SettingsPage;
