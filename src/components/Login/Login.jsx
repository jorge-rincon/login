import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { InputControl } from "../InputControl/InputControl";

import styles from "./styleLogin/Login.module.css";

export function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  //estado de errores
  const [errorMsg, setErrorMsg] = useState([]);
  //inactivar boton de envio
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();
  //loguearse
  const Loguearse = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos erroneos");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        navigate("/home");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSubmitBtnDisabled(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          placeholder="Ingresa tu correo"
          type= "text"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Ingresa tu contraseña"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              pass: event.target.value,
            }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={ Loguearse } disabled= { submitBtnDisabled } >Entrar</button>
          <p>
            <span>
              <Link to="/sing-up">Crear cuenta</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
