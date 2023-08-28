import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900   pt-36 pb-8 flex items-center justify-between px-[600px] text-gray-600">
      <div className="flex flex-col gap-1 ">
        <p className="text-white">Company</p>
        <span>About</span>
        <span>Jobs</span>
        <span>For the records</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-white">Communities</p>
        <span>For Artists</span>
        <span>Developers</span>
        <span>Advertising</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-white">Useful Links</p>
        <span>Support</span>
        <span>Free mobile app</span>
        <span>Investors</span>
      </div>
    </footer>
  );
};

export default Footer;
