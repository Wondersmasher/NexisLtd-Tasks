import React from "react";
import logo from "../assets/logo.png";
import page from "../assets/page.png";

import { useNavigate } from "react-router-dom";
const SignIn = ({ handleChange, handleSubmitSignIn, user }) => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup");
  };
  const goToGetData = () => {
    navigate("/getdata");
  };

  return (
    <section className="w-screen h-screen ">
      <nav className=" w-fit h-fit">
        <img
          src={logo}
          alt="logo"
          className="md:h-[80%] md:w-[80%] h-[60%] w-[60%] px-3 py-3"
        />
      </nav>
      <div className="md:grid-cols-2 grid max-w-[1240px] m-auto ">
        <div className="">
          <img src={page} alt="page" className="w-full px-3 py-3" />
        </div>
        <div className="mx-auto">
          <h2 className="text-[46px] font-serif m-5 p-10">Log In Form</h2>
          <form className="grid  ">
            <div className="md:mx-1 mx-auto">
              <input
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="m-2 border border-b-2 "
                placeholder="Write email"
              />
            </div>
            <div className="md:mx-1 mx-auto">
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="mt-2 ml-2 border border-b-2 "
                placeholder="Write password"
              />
              <p className="text-[8px] mt-0 ml-2 text-[#B4B4B4]">
                Your password must be at least 8 characters
              </p>
            </div>
            <button
              className="bg-[#3B8BEA] rounded-md w-[5rem] text-white hover:text-[#3B8BEA] hover:border-[#3B8BEA] border hover:bg-white mt-10 mx-auto "
              onClick={(e) => {
                handleSubmitSignIn(e);
                goToGetData();
              }}
            >
              Sign In
            </button>
          </form>
          <div className="float-right mt-10 mb-5">
            <p className="text-[#B4B4B4] text-[13px]">
              Don't have an account?{" "}
              <button
                onClick={() => goToSignUp()}
                className="text-[#3B8BEA] underline "
              >
                SIGNUP HERE
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
