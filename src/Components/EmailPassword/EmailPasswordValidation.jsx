import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes("@") && value.includes("."));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 6);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-80 h-screen flex flex-col items-center bg-gray-200 pt-10 pb-8 px-10 rounded-xl relative">
        <img
          className="w-20 my-10"
          src="https://png.pngtree.com/png-clipart/20240610/original/pngtree-user-icon-brush-vector-png-image_15299640.png"
          alt=""
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email Address"
          className={`p-2 mb-2 border bg-gray-300 w-full ${
            emailValid === null
              ? "border-gray-300"
              : emailValid
              ? "border-green-400"
              : "border-red-500"
          } rounded`}
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password (minimum 6 letters)"
          className={`p-2 mb-2 border bg-gray-300 w-full ${
            passwordValid === null
              ? "border-gray-500"
              : passwordValid
              ? "border-green-400"
              : "border-red-500"
          } rounded`}
        />
        <div className="h-3 mt-5 w-full bg-gray-300 rounded" />
        <div className="my-5">
          <div className="h-3 w-40 bg-gray-300 rounded" />
        </div>
        <div className="h-2 w-40 bg-gray-300 mt-5 absolute bottom-4 rounded" />
      </div>
    </div>
  );
};

export default EmailPasswordForm;
