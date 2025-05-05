import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
  const { signWithGoogle, signInWithEmail } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((res) => {
        if (location.state) {
          navigate(location.state);
          return;
        }
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then((res) => {
        if (location.state) {
          navigate(location.state);
          return;
        }
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="sm:my-36 my-16   p-2">
      <title>Sign In</title>
      <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
        <div className="bg-base-200 shadow-xl rounded-2xl p-7 sm:p-10 text-accent">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Sign In
          </h3>
          <form onSubmit={handleSignIn}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                E-mail
              </label>
              <input
                placeholder="iventiq@example.org"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="password"
                className="inline-block mb-1 font-medium"
              >
                Password
              </label>
              <input
                placeholder="Enter your password"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="btn btn-primary text-white w-full"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex items-center w-full mb-5">
            <hr className="flex-1 border-gray-300" />
            <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
            <hr className="flex-1 border-gray-300" />
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-accent w-full border-[#e5e5e5] mb-4"
          >
            <FcGoogle size={18} />
            Sign In with Google
          </button>
          <p className="text-xs text-gray-600 sm:text-sm">
            Don't have an account?{" "}
            <Link
              state={location.state}
              to={"/sign-up"}
              className="text-blue-500"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
