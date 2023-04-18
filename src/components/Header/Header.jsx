import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#232f3e] text-white">
      <nav className="max-w-[1200px] h-20 mx-auto px-5 font-semibold flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-4 text-sm">
          <Link className="hover:text-slate-400" to="/">
            Shop
          </Link>
          <Link className="hover:text-slate-400" to="/orders">
            Orders
          </Link>
          <Link className="hover:text-slate-400" to="/inventory">
            Inverter
          </Link>
          <Link className="hover:text-slate-400" to="/login">
            Login
          </Link>
          <Link className="hover:text-slate-400" to="/singup">
            Sing up
          </Link>
          <p>
            <small>{user && <span> {user.email}</span>}</small>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
