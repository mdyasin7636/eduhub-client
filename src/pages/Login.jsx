import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            <h1 className="text-3xl mb-2 font-bold">Login</h1>
            <p className="font-thin ">Streamline Your Inventory - Join Today</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="brainytitans@gmail.com"
                  className="input input-bordered w-full"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  defaultValue="123456"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <div
                  className="absolute right-2 top-12 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <RxEyeOpen className="h-5 w-5" />
                  ) : (
                    <RxEyeClosed className="h-5 w-5" />
                  )}
                </div>
              </div>
              <div className="label font-semibold">
                Don&apos;t have an account?
                <Link className="font-bold" to="/register">
                  Register
                </Link>
              </div>
              <div className="mt-2">
                <button className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">
                  Login
                </button>
              </div>
              <div className="divider mt-3 mb-3 font-semibold">OR</div>
            </form>
            <GoogleLogin buttonText="Login with Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
