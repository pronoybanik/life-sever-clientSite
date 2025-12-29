import React from "react";

const AdminTableLoader = () => {
  return (
    <tr>
      <td colSpan="10" className="px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated medical cross */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>
            
            {/* Rotating ring around cross */}
            <div className="absolute -inset-2">
              <div className="w-24 h-24 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          </div>
          
          {/* Loading message */}
          <div className="text-center">
            <p className="text-gray-600 font-medium text-lg mb-2">Loading Doctor Data</p>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "100ms" }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
            </div>
          </div>
          
          {/* Skeleton rows preview */}
          <div className="w-full max-w-4xl space-y-3 pt-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex space-x-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/5"></div>
              </div>
            ))}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminTableLoader;
