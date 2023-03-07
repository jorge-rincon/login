import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import styles from "./styleSingUp/SingUp.module.css";
import { async } from "@firebase/util";

import { InputControl } from "../InputControl/InputControl";

export function SingUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  //estado de errores
  const [errorMsg, setErrorMsg] = useState([]);
  //inactivar boton de envio
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Ingrese todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        const user = res.user;
        //actualizar usuario
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSubmitBtnDisabled(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <InputControl
          label="Nombre"
          placeholder="Ingresa tu nombre"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              name: event.target.value,
            }))
          }
        />

        <InputControl
          label="Correo"
          placeholder="Ingresa tu correo"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />

        <InputControl
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              pass: event.target.value,
            }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}> {errorMsg} </b>
          <button onClick={registro} disabled={submitBtnDisabled}>
            Registrar
          </button>
          <p>
            Si ya tienes una cuenta inicia sesion
            <span>
              <Link to="/"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
