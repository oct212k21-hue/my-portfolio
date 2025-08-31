import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <img
        src="https://i.postimg.cc/vm49MFMF/Chat-GPT-Image-Aug-31-2025-11-36-00-PM.png"
        alt="HS Logo"
        className="h-10 w-auto transition-transform duration-200 hover:scale-105"
      />
    </div>
  );
};

export default Logo;
