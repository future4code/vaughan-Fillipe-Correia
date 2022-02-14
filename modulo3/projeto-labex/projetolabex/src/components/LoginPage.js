import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="loginpage">
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="number" name="password" />
                </label>
                <br />
                <Link to="/">
                <button>Voltar</button>
                </Link>
                <Link to="/adminpage">
                <button>Entrar</button>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;