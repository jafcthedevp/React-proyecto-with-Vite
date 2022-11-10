import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../assets/firebase";

function salir(){ 
    return auth.signOut()
    navigate("/");
}
export function Home(props){
    return(<div>

        <div>
            <div>
                <h1>
                    <Link to="/login">
                        Login
                    </Link>
                </h1>
                <br/>
                <h1>
                    <Link to="/signup">
                        Registrar
                    </Link>
                </h1>
            </div>
        </div>
        <h2>{props.name?`Bienvenido - ${props.name}`:"Iniciar sesión"}</h2>
        <button onClick={salir}>salir</button>
    </div>)
}