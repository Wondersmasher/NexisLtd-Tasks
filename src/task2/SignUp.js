import React, { useState } from "react";
import logo from "../assets/logo.png";
import page from "../assets/page.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const signUpURL = ` https://test.nexisltd.com/signup`;

const SignUp = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    value: 0,
  });
  const goToSignIn = () => {
    navigate("/");
  };
  // console.log(newUser);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleNextPage = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      value: newUser.value + 1,
    });
  };
  const handlePrevPage = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      value: newUser.value - 1,
    });
  };
  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (newUser.password.length < 8) return;
    try {
      const response = await axios.post(signUpURL, {
        first_name: newUser.firstName,
        last_Name: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
        phone_number: newUser.phoneNumber,
      });
      console.log(response);
      goToSignIn();
    } catch (error) {
      console.log(error.response);
    }
  };
  if (newUser.value === 0) {
    return (
      <section className="w-screen h-screen">
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
            <h2 className="text-[46px] font-serif m-5 p-10">Sign Up Form</h2>
            <form className="grid">
              <div className="md:mx-1 mx-auto">
                <input
                  placeholder="Write First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleChange}
                  className="m-2 border border-b-2 "
                />
              </div>
              <div className="md:mx-1 mx-auto">
                <input
                  placeholder="Write Last Name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleChange}
                  className="m-2 border border-b-2 "
                />
              </div>
              <div className="flex justify-around mt-[3.75rem]">
                {/* <button className="  text-black" onClick={handlePrevPage}>
                  Back
                </button> */}
                <button
                  className="bg-[#3B8BEA] rounded-md w-[5rem] text-white hover:text-[#3B8BEA] hover:border-[#3B8BEA] border hover:bg-white "
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </form>
            <div className="float-right mt-[4rem] mb-5">
              <p className="text-[#B4B4B4] text-[13px]">
                Already have an account?{" "}
                <button
                  onClick={() => goToSignIn()}
                  className="text-[#3B8BEA] underline "
                >
                  SIGNIN HERE
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (newUser.value === 1) {
    return (
      <section className="w-screen h-screen">
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
            <h2 className="text-[46px] font-serif m-5 p-10">Sign Up Form</h2>
            <form className="grid">
              <div className="md:mx-1 mx-auto">
                <input
                  placeholder="Write Email"
                  type="text"
                  id="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="m-2 border border-b-2 "
                />
              </div>
              <div className="md:mx-1 mx-auto">
                <input
                  placeholder="Write Phone Number"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={newUser.phoneNumber}
                  onChange={handleChange}
                  className="m-2 border border-b-2 "
                />
              </div>
              <div className="flex justify-around mt-[3.75rem]">
                <button className="  text-black" onClick={handlePrevPage}>
                  Back
                </button>
                <button
                  className="bg-[#3B8BEA] rounded-md w-[5rem] text-white hover:text-[#3B8BEA] hover:border-[#3B8BEA] border hover:bg-white "
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-screen h-screen">
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
          <h2 className="text-[46px] font-serif m-5 p-10">Sign Up Form</h2>
          <form className="grid">
            <div className="md:mx-1 mx-auto">
              <input
                placeholder="Write Password"
                type="password"
                id="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
                className="mt-2 ml-2 border border-b-2 "
              />
              <p className="text-[8px] mt-0 ml-2 text-[#B4B4B4]">
                Your password must be at least 8 characters
              </p>
            </div>
            <div className="flex justify-around mt-[3.75rem]">
              {/* <button className="  text-black" onClick={handlePrevPage}>
                Back
              </button> */}
              <button
                className="bg-[#3B8BEA] rounded-md w-[5rem] text-white hover:text-[#3B8BEA] hover:border-[#3B8BEA] border hover:bg-white "
                onClick={handleSubmitSignUp}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
