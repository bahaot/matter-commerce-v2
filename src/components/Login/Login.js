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

import styles from "./Login.module.css";
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
      console.error(error);
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
      console.error(err);
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
    <>
      <div className={styles["container-login"]}>
        <h2 className={styles["heading"]}>Join Today</h2>
        <div className={styles['heading-subtitle']}>
          <h3>Sign in with one of the providers</h3>
        </div>
        <div className={styles['buttons-login']}>
          <button
            className={styles["btn-login"]}
            onClick={GoogleLogin}
          >
            <FcGoogle className={styles["icon"]} /> Sign in with Google
          </button>
          <button
            className={styles['btn-login']}
            onClick={Facebooklogin}
          >
            <AiFillFacebook className={`${styles["icon"]} ${styles['icon-facebook']}`} /> Sign in with
            Facebook
          </button>
        </div>
      </div>

    </>
  );
};

export default Login;
