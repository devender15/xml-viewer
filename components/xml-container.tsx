import React from "react";

export default function XmlContainer({ children } : { children: React.ReactNode }) {
  return (
    <div className="flex  items-start justify-center p-4 h-[35rem] max-h-[35rem] max-w-full overflow-auto bg-gray-50 rounded-xl shadow-sm">
      {children}
    </div>
  );
}
