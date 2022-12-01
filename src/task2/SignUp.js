import React, { useState } from "react";
import axios from "axios";
const signUpURL = ` https://test.nexisltd.com/signup`;
const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
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
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section>
      <form>
        <div>
          <input
            placeholder="firstname"
            type="text"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="lastName"
            type="text"
            id="lastName"
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="phone nu"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newUser.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="text"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmitSignUp}>Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
