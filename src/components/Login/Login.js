import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import home from '../Images/home.png';

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
    <div className={styles.LoginImage}>
           <img  src={home} alt="home" />
        </div>
      <div className={styles.LoginForm}>
      {/* <p className={styles.RegisterCon}> Not a member ? <span className={styles.fancy}> <Link>Register now</Link>  </span></p> */}
       
      <p className={styles.RegisterCon}>
          Not a member ? {" "}
            <span className={styles.fancy}>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        <h1 className={styles.heading}>Hello again!!</h1>
        <p className={styles.DesHead}>Welcome back you've been missed!</p>
        <InputControl className={styles.email}
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl className={styles.pass}
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} className={styles.btn} onClick={handleSubmission}>
            Login
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
