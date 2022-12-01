import React from "react";
const btn = `border border-black`;
const SignIn = ({ handleChange, handleSubmitSignIn, user }) => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={btn}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={btn}
          />
        </div>
        <button onClick={handleSubmitSignIn}>Sign In</button>
      </form>
    </section>
  );
};
export default SignIn;
