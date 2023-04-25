import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaGoogle } from "react-icons/fa";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSingUp = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    setError("");
    if (password !== confirm) {
      setError("Your password not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters of longer.");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must be one uppercase. ");
      return;
    }
    createUser(email, password)
      .then((result) => {
        alert("Account created");
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
  };
  return (
    <div className="w-80 items-center justify-center flex flex-col gap-2 my-10 mx-auto border-warning border-2 min-h-[70vh] shadow-md shadow-warning py-5 font-serif px-3">
      <h1 className="text-2xl font-bold mb-3">Sing up</h1>

      <form onSubmit={handleSingUp} className="flex flex-col gap-4">
        <div className="form-control">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <span className="absolute right-3 bottom-2 opacity-60 cursor-pointer">
            <FaEye />
          </span>
        </div>
        <div className="form-control">
          <label className="mb-1" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="password"
            name="confirm"
            placeholder="password"
            required
          />
        </div>

        <div className="form-control w-full">
          <input
            className="bg-orange-400 px-5 text-white rounded-2xl py-1 text-center"
            type="submit"
            value="Sing up"
          />
        </div>
        <p className="text-warning text-xs text-center">{error}</p>
      </form>
      <button className="flex gap-3 items-center btn btn-outline">
        <FaGoogle className="" /> Continue with Google
      </button>
      <p>
        <small>
          Already have an account{" "}
          <Link className="text-warning font-bold" to="/login">
            Login
          </Link>
        </small>
      </p>
    </div>
  );
};

export default SingUp;
