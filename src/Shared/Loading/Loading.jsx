import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-30" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Inner Content */}
        <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg">
          <FaHeartbeat className="w-12 h-12 text-blue-600 animate-pulse" style={{ animationDuration: '1s' }} />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Loading</h2>
        <p className="mt-2 text-gray-600">
          Preparing your healthcare experience
        </p>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.8s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
