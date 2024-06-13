import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  //   const { createUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen p-12"
      style={{
        backgroundImage: `url("https://i.ibb.co/QQnk118/inventory3.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full lg:w-8/12 bg-white rounded-xl mx-auto my-3 shadow-2xl overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-10 lg:px-9 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <img
              src="https://i.ibb.co/t4J05kK/stockHub.png"
              className="w-44"
              alt="StockHub Icon"
            />
            <h1 className="text-3xl mt-2 mb-2 font-bold">
              Welcome to StockHub
            </h1>
            <div>
              <p className="font-thin">
                Join our inventory revolution and experience the future of
                product management. It&apos;s time to organize, optimize, and
                elevate your business. Start your StockHub journey today!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-12 py-12">
            <h1 className="text-3xl mb-2 font-bold">Register</h1>
            <p className="font-thin ">Streamline Your Inventory - Join Today</p>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                  name="confirmPassword"
                />
              </div>
              <div className="label font-semibold">
                Already Have an Account?
                <Link className="font-bold" to="/">
                  Login
                </Link>
              </div>
              <div className="mt-2">
                <button className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">
                  Register
                </button>
              </div>
              <div className="divider mt-3 mb-3 font-semibold">OR</div>
            </form>
            <GoogleLogin buttonText="Register with Google"></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
