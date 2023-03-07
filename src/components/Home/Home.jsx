import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";


export function Home(props) {

  const navigate = useNavigate()
  const salir = () => {
    navigate("/")
    return auth.signOut()
    
  }
  
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/sing-up">Registrar</Link>
          </h1>
        </div>
        <h2>
            { props.name? `Bienvenido - ${ props.name } Estamos trabajando para mejorar esta vista`: "" }
        </h2>
        <div>
        <button onClick={ salir } >Salir</button>
        </div>
      </div>
    </div>
  );
}
