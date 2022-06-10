import React, { useState } from "react";

//assets
import arrow from "../../assets/SVG/secondary.svg";
import mail from "../../assets/SVG/male.svg";
import female from "../../assets/SVG/female.svg";

const SignUp = () => {
  const [gender, setGender] = useState("");
  console.log(gender);
  const changeHandler = (e) => {
    setGender(e.target.id);
  };

  return (
    <div className="center h-screen w-full bg-gray-300 ">
      <div className="mt-20  mb-14 flex h-[700px] w-[520px] flex-col items-start bg-white py-6 px-16 shadow-2xl">
        <h5 className="text-2xl font-semibold text-[#4A5568]">
          Create an account
        </h5>
        <p className="mb-7 leading-6 text-gray-700">
          Already have an account?
          <span className="font-semibold text-indigo-600 ">Log in</span>
        </p>
        {/* input for get name , email , password */}
        <div className="input-Parent-form ">
          <label htmlFor="userName" className="label-form">
            Full name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="input-form"
          />
        </div>
        <div className="input-Parent-form mt-5">
          <label htmlFor="email" className="label-form">
            Email
          </label>
          <input type="email" id="email" name="email" className="input-form" />
        </div>
        <div className="input-Parent-form mt-5">
          <label htmlFor="password" className="label-form">
            Create a Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input-form"
          />
        </div>

        {/* select gender part */}
        <p className="label-form mt-5">Gender</p>
        <div className="center w-full justify-around gap-5">
          <div className="">
            <label
              htmlFor="male"
              className={`label-gender-input transition  ${
                gender === "male" ? "border-[#7f9cf5] bg-[#ebf4ff]" : ""
              }`}
            >
              <span
                className={`mr-3 ml-4 h-5 w-5 rounded-full border bg-white transition ${
                  gender === "male" ? "border-[6px] border-[#5a67d8]" : ""
                }`}
              ></span>{" "}
              Mail{" "}
              <img
                src={mail}
                alt=""
                className={`ml-14 h-4 w-5 transition ${
                  gender === "male" ? "rotate-[360deg]" : ""
                }`}
              />
              <input
                type="radio"
                name="gender"
                id="male"
                className="gender-input"
                checked={gender === "male"}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="">
            <label
              htmlFor="female"
              className={`label-gender-input  transition ${
                gender === "female" ? "border-[#7f9cf5] bg-[#ebf4ff]" : ""
              }`}
            >
              <span
                className={`mr-3 ml-4 h-5 w-5 rounded-full border bg-white transition ${
                  gender === "female" ? "border-[6px] border-[#5a67d8]" : ""
                }`}
              ></span>{" "}
              Female{" "}
              <img
                src={female}
                alt=""
                className={`ml-14 h-4 w-5 transition ${
                  gender === "female" ? "rotate-[360deg]" : ""
                }`}
              />
              <input
                type="radio"
                name="gender"
                id="female"
                className="gender-input "
                checked={gender === "female"}
                onChange={changeHandler}
              />
            </label>
          </div>
        </div>

        {/* select Birthday part */}

        <p className="label-form mt-5">Birthday</p>
        <p className="my-1 text-sm text-[#4A5568]">
          To sign up, you must be 18 or older.
        </p>
        <div className="center w-full justify-between">
          <button className=" birthday-btn">
            Month <img src={arrow} alt="arrow" className="ml-7" />
          </button>
          <button className=" birthday-btn">
            Day <img src={arrow} alt="arrow" className="ml-7" />
          </button>
          <button className=" birthday-btn">
            Year <img src={arrow} alt="arrow" className="ml-7" />
          </button>
        </div>

        {/* SignUp btn */}

        <button className="h-12 w-full rounded-lg mt-3 bg-[#5A67D8] text-lg font-semibold text-white">
          Sign up
        </button>

        {/* checkbox for send messages */}

        <div className="mt-3">
          <input type="checkbox" name="" id="messages" />
          <label htmlFor="messages" className="ml-3 text-[#4a5568] ">
            I don’t want to receive marketing messages.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
