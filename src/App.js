// import logo from './logo.svg';
// import "./App.css";
// import { useState } from "react";
import axios from "axios";
import { useState } from "react";
import SignIn from "./task1/SignIn";
import SignUp from "./task2/SignUp";
import GetData from "./task3/GetData";
function App() {
  console.log(`rendered`);
  // const [loading, setLoading] = useState(false);
  const signInURL = `https://test.nexisltd.com/login`;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    access_token: "",
  });
  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      if (user.password.length < 8) console.log(`set more password`);
      const response = await axios.post(signInURL, user);
      console.log(response.data);
      setLoading(true);
      setUser({ ...user, access_token: response.data.access_token });
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <main>
      <SignIn
        handleChange={handleChange}
        handleSubmitSignIn={handleSubmitSignIn}
        user={user}
      />
      <SignUp />
      <GetData access={user.access_token} loading={loading} />
    </main>
  );
}

export default App;
