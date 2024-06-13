/* eslint-disable react/prop-types */
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ buttonText }) => {
  return (
    <div>
      <button
        // onClick={handleGoggle}
        className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white"
      >
        <span>
          <FcGoogle size="18px" />
        </span>
        {buttonText}
      </button>
    </div>
  );
};

export default GoogleLogin;
