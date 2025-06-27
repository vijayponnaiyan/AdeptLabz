import React from "react";
import OrderCard from "../../pages/order/component/OrderCard";
import men from "../../assets/images/gallery/men.png";

const orders = [
  {
    id: "12345678",
    title: "Maddup White Cotton Blend Checkered Slim Fit Shirt",
    deliveryDate: "Sat, Aug 30",
    price: 1899,
    status: "Pending",
    image: men,
  },
  {
    id: "12345679",
    title: "Maddup White Cotton Blend Checkered Slim Fit Shirt",
    deliveryDate: "Sun, Aug 31",
    price: 1899,
    status: "Pending",
    image: men,
  },
  {
    id: "12345680",
    title: "Maddup White Cotton Blend Checkered Slim Fit Shirt",
    deliveryDate: "Sun, Aug 16",
    price: 1899,
    status: "Delivered",
    image: men,
  },
  {
    id: "12345681",
    title: "Maddup White Cotton Blend Checkered Slim Fit Shirt",
    deliveryDate: "Sat, Aug 15",
    price: 1899,
    status: "Delivered",
    image: men,
  },
];

export default function Myorders() {
  return (
    <div className="w-full border-1 border-black rounded-lg p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">My Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
