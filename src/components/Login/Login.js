import React from "react";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


const Login = () => {
  const [user, loading] = useAuthState(auth);
  // sign in with google
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //   sign in with Facebook
  const fbProvider = new FacebookAuthProvider();
  const Facebooklogin = async () => {
    try {
      const result = signInWithPopup(auth, fbProvider);
      console.log(result);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          onClick={GoogleLogin}
        >
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
        <button
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          onClick={Facebooklogin}
        >
          <AiFillFacebook className="text-2xl text-blue-600" /> Sign in with
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
