import React from "react";
import Banner from "../../pages/Banner/Banner";
import SubGallery from "../../pages/Gallery/SubGallery";
import Latest from "../../pages/Collation/latest";
import Messages from "../../pages/Testimonials/Messages";
import Stylegulides from "../../pages/Gulides/Stylegulides.jsx";
import Loader from "../../component/ui/Loader.jsx";
import Error from "../../component/ui/ErrorState";
import { CartState } from "../../Hooks/Contex/UseContexProvider.jsx";

export default function Home() {
  const { loading, error } = CartState();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Error message={error} />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div>
        <Banner />
      </div>

      {/* Gallery Section */}
      <div>
        <SubGallery />
      </div>

      {/* Latest Section */}
      <div className="px-4 sm:px-6 md:px-10 mt-5">
        <Latest />
      </div>

      {/* Testimonials Section */}
      <div className="px-4 sm:px-6 md:px-10 mt-5">
        <Messages />
      </div>

      {/* Style Guides */}
      <div>
        <Stylegulides />
      </div>
    </div>
  );
}
