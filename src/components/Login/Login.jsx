import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { userLogin, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // login user
  const handleSingIn = (e) => {
    e.preventDefault();
    const forms = e.target;
    const email = forms.email.value;
    const password = forms.password.value;
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        forms.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="w-80 items-center justify-center flex flex-col gap-4 my-10 mx-auto border-2 border-warning py-5 font-serif px-3 min-h-[70vh] shadow-md shadow-warning">
      <h1 className="text-2xl mb-3 font-bold">Login</h1>
      <form onSubmit={handleSingIn} className="flex flex-col gap-3">
        <div className="form-control">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="form-control">
          <label className="mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <span>
          <small className="text-error">{error}</small>
        </span>
        <span>
          <a className="link link-primary text-sm cursor-pointer ">
            Forget password ?
          </a>
        </span>
        <div className="form-control text-center">
          <input
            className="bg-orange-400 px-5 text-white rounded-2xl py-1 text-center"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <button className="flex gap-3 items-center btn btn-outline">
        <FaGoogle className="text-green-600" /> Continue with Google
      </button>
      <p>
        <small>
          New to ema john? Create new Account{" "}
          <Link className="text-warning font-bold" to="/singup">
            Sing up
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
