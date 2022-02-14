import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/login">
            <button>Entrar</button>
            </Link>
            
            <Link to="/triplist">
            <button>Lista de viagens</button>
            </Link>
        </div>
    );
};

export default HomePage;