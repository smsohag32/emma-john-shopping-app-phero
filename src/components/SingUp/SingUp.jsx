import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SingUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSingUp = (e) => {
    e.preventDefault();

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
      setError("Password must be 6 characters or longer.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const userLoggedIn = result.user;
        setUser(userLoggedIn);
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
  };
  return (
    <div className="w-60 items-center justify-center flex flex-col gap-8 my-10 mx-auto border-2 py-5 font-serif px-3">
      <h1 className="text-2xl font-bold">Sing up</h1>
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
        <div className="form-control">
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

        <div className="text-center">
          <input
            className="bg-orange-400 px-5 text-white rounded-2xl py-1 text-center"
            type="submit"
            value="Sing up"
          />
        </div>
        <p className="text-warning text-xs text-center">{error}</p>
      </form>
      <p>
        <small>
          Already have an account{" "}
          <Link className="text-success" to="/login">
            Login
          </Link>
        </small>
      </p>
    </div>
  );
};

export default SingUp;
