import React from "react";

const SingUp = () => {
  return (
    <div className="w-60 items-center justify-center flex flex-col gap-8 my-10 mx-auto border-2 py-5 font-serif px-3">
      <h1 className="text-2xl font-bold">Sing up</h1>
      <form className="flex flex-col gap-4">
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
        <div className="form-control">
          <label className="mb-1" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="border-2 px-2 py-1 rounded-xl"
            type="password"
            name="confirm"
            placeholder="password"
          />
        </div>

        <div className="text-center">
          <input
            className="bg-orange-400 px-5 text-white rounded-2xl py-1 text-center"
            type="submit"
            value="Sing up"
          />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
