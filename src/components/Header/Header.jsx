import React from "react";
import logo from "../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div className="bg-[#232f3e] text-white">
      <nav className="max-w-[1200px] h-20 mx-auto px-5 font-semibold flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-4 text-sm">
          <a className="hover:text-slate-400" href="/home">
            Shop
          </a>
          <a className="hover:text-slate-400" href="/order">
            Orders
          </a>
          <a className="hover:text-slate-400" href="/inverter">
            Inverter
          </a>
          <a className="hover:text-slate-400" href="/login">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
