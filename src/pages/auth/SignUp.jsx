import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { capitalizeWords } from "../../utils/capitalize";

const SignUp = () => {
  const { signUpWithEmail, setUser, updateInfo, signWithGoogle } =
    use(AuthContext);
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    digit: false,
    specialChar: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidations({
      length: /.{8,}/.test(value),
      lowercase: /(?=.*[a-z])/.test(value),
      uppercase: /(?=.*[A-Z])/.test(value),
      digit: /(?=.*\d)/.test(value),
      specialChar: /(?=.*[!@#$%^&*])/.test(value),
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check if all validations pass
    const isPasswordValid = Object.values(validations).every(Boolean);
    if (!isPasswordValid) {
      setError("Please fix password requirements");
      setLoading(false);
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const displayName = capitalizeWords(name);
    const photoURL = form.photoURL.value;
    const email = form.email.value;

    try {
      // Create user
      const userCredential = await signUpWithEmail(email, password);

      // Update profile
      await updateInfo({
        displayName,
        photoURL,
      });

      // Update user state
      setUser({
        ...userCredential.user,
        displayName,
        photoURL,
      });

      // Redirect
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Signup error:", error);
      const errorCode = error.code;
      const errorMessage = errorCode.split("/")[1].replace(/-/g, " ");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signWithGoogle();
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Google signin error:", error);
      setError("Failed to sign in with Google");
    }
  };

  return (
    <div className="sm:my-10 my-4 p-2">
      <title>Sign Up</title>
      <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
        <div className="bg-base-200 shadow-xl rounded-2xl p-7 sm:p-10 text-accent">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Sign up
          </h3>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="name" className="inline-block mb-1 font-medium">
                Name
              </label>
              <input
                placeholder="Enter your name"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="photoURL"
                className="inline-block mb-1 font-medium"
              >
                Photo URL
              </label>
              <input
                placeholder="Your photo URL"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="photoURL"
                name="photoURL"
              />
            </div>

            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                E-mail
              </label>
              <input
                placeholder="example@domain.com"
                required
                type="email"
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
                value={password}
                onChange={handlePasswordChange}
              />

              <div className="text-sm text-gray-600 mt-1">
                <p
                  className={
                    validations.length ? "text-green-500" : "text-red-500"
                  }
                >
                  {validations.length ? "✓" : "✗"} At least 8 characters
                </p>
                <p
                  className={
                    validations.lowercase ? "text-green-500" : "text-red-500"
                  }
                >
                  {validations.lowercase ? "✓" : "✗"} Lowercase letter
                </p>
                <p
                  className={
                    validations.uppercase ? "text-green-500" : "text-red-500"
                  }
                >
                  {validations.uppercase ? "✓" : "✗"} Uppercase letter
                </p>
                <p
                  className={
                    validations.digit ? "text-green-500" : "text-red-500"
                  }
                >
                  {validations.digit ? "✓" : "✗"} At least one number
                </p>
                <p
                  className={
                    validations.specialChar ? "text-green-500" : "text-red-500"
                  }
                >
                  {validations.specialChar ? "✓" : "✗"} Special character
                  (!@#$%^&*)
                </p>
              </div>
            </div>

            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="btn btn-primary text-white w-full"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign Up"}
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
            disabled={loading}
          >
            <FcGoogle size={18} />
            Sign Up with Google
          </button>

          <p className="text-xs text-gray-600 sm:text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
