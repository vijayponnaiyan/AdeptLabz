import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Profile from "../../pages/Profile/Profile";
import Myorders from "../../pages/order/Myorders";
import imageone from "../../assets/images/image 1.png";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [openAccordion, setOpenAccordion] = useState("profile");

  const toggleAccordion = (key) => {
    setActiveTab(key);
    setOpenAccordion(openAccordion === key ? "" : key);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "orders":
        return <Myorders />;
      case "shipping":
        return (
          <div className="bg-white p-4 rounded shadow text-sm sm:text-base">
            <h2 className="text-lg sm:text-xl font-medium mb-2">
              🚚 Shipping Info
            </h2>
            <p>Your saved shipping addresses and options.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderMenuItem = (key, title, description) => {
    const isOpen = openAccordion === key;

    return (
      <div>
        <button
          onClick={() => toggleAccordion(key)}
          className={`w-full flex justify-between items-center text-left px-4 py-3 transition-all duration-200 ${
            isOpen
              ? "bg-gray-100 border-b-2 border-black rounded-t-md"
              : "hover:bg-gray-50"
          }`}
        >
          <div className="leading-5">
            <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>

          {/* Icons */}
          <span className="text-gray-400 text-sm block lg:hidden">
            {isOpen ? (
              <FaChevronDown className="rotate-180 transition" />
            ) : (
              <FaChevronDown />
            )}
          </span>
          <span className="text-gray-400 text-sm hidden lg:block">
            <FaChevronRight />
          </span>
        </button>

        {/* Accordion content (only sm/md) */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } px-4 py-2`}
        >
          {isOpen && renderContent()}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  bg-gray-50 p-4 sm:p-6">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 mb-4 px-4">
        Home / <span className="text-gray-800">My Profile</span>
      </div>

      {/* Layout */}
      <div className="flex flex-col  px-4 lg:flex-row gap-6 min-h-[80vh]">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white shadow-sm rounded-md p-0 overflow-hidden">
          <div className="p-4 flex items-center gap-4">
            <img
              src={imageone}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-medium text-gray-800">Grishk</h2>
              <p className="text-sm text-gray-500">griiskaim@gmail.com</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-0">
            {renderMenuItem("profile", "My Profile", "Notifications, password")}
            {renderMenuItem("orders", "My Orders", "Already have 12 orders")}
            {renderMenuItem("shipping", "Shipping addresses", "3 addresses")}
          </nav>
        </aside>

        {/* Main Content (only for lg+) */}
        <main className="hidden lg:block flex-1 bg-white shadow-sm rounded-md p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
