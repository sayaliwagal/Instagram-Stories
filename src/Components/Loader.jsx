import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-green">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default Loader;
