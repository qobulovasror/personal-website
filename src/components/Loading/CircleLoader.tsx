import React from 'react'

const CircleLoader = ({ children, scrollPercentage }: { children: React.ReactNode; scrollPercentage: number }) => {
  return (
    <div
      className="w-10 h-10 rounded-full p-3 md:p-7 relative"
      style={{
        background: `conic-gradient(#4326FF ${scrollPercentage}%, #000 ${scrollPercentage}%)`,
        transition: 'background 0.3s ease',
      }}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-1 md:p-2">
        {children}
      </span>
    </div>
  );
};

export default CircleLoader;