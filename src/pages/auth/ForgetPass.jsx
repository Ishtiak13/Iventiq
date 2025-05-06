import React, { use, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdInfoOutline } from "react-icons/md";

const ForgetPass = () => {
  const { updatePass } = use(AuthContext);
  const [sendEmail, setSendEmail] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    updatePass(email)
      .then(() => {
        setSendEmail(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        // ..
      });
  };
  return (
    <div>
      <div className="sm:my-36 my-16   p-2">
        <title>Reset Password</title>
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
          <div className="bg-base-200 shadow-xl rounded-2xl p-7 sm:p-10 text-accent">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Reset Your Password
            </h3>
            {sendEmail ? (
           <p className="bg-green-400 font-semibold rounded-2xl p-3 flex items-center gap-3">
           <MdInfoOutline size={50} className=" border-r-2 border-black/50 pr-3" />
           We just emailed your reset link. Time to refresh that memory!
         </p>
         
            ) : (
              <form onSubmit={handleReset}>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
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

                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-full"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
