import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { user, createUser } = useAuth();
  const [passMatch, setPassMatch] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassMatch(false);
    }

    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            name: name,
            email: data?.user?.email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
      if (user) {
        navigate(from);
      }
    }
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
            <h1 className="text-3xl mb-2 font-bold">Register</h1>
            <p className="font-thin ">Streamline Your Inventory - Join Today</p>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
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
                  required
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
                  required
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
                  required
                  className="input input-bordered w-full"
                  name="confirmPassword"
                />
              </div>
              {!passMatch && (
                <div className="my-2">
                  <p className="text-red-500 font-semibold">
                    Password do not match!
                  </p>
                </div>
              )}
              <div className="label font-semibold">
                Already Have an Account?
                <Link className="font-bold" to="/">
                  Login
                </Link>
              </div>
              <div className="mt-2">
                <input
                className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold"
                type="submit"
                value="Register"
                />
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
