import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // using Heroicons for arrow

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-800",
  Delivered: "bg-green-100 text-green-800",
};

export default function OrderCard({ order }) {
  return (
    <div className="flex items-start justify-between p-4 rounded-lg shadow-sm bg-white mb-4 w-full">
      {/* Left: Image + Details */}
      <div className="flex items-start">
        <img
          src={order.image}
          alt={order.title}
          className="w-20 h-20 object-cover rounded mr-4 flex-shrink-0"
        />
        <div>
          <p className="text-sm text-gray-500">Order #{order.id}</p>
          <h3 className="font-semibold text-gray-800">{order.title}</h3>
          <p className="text-xs text-gray-500">
            Express Delivery by {order.deliveryDate}
          </p>
        </div>
      </div>

      {/* Right: Price + Status + Arrow */}
      <div className="flex flex-col items-end justify-between">
        <div className="text-right">
          <p className="text-sm text-gray-500">Credit Card Payment</p>
          <p className="font-semibold text-gray-800">
            Rs {order.price.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center mt-1">
          <div
            className={`inline-block px-2 py-1 text-xs rounded ${
              statusStyles[order.status]
            }`}
          >
            {order.status}
          </div>
          <ChevronDownIcon className="w-4 h-4 text-gray-400 ml-2" />
        </div>
      </div>
    </div>
  );
}
