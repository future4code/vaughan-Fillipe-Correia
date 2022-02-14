import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";

const TripList = () => {
    return (
        <div className="trip-list">
        <h1>Trip List</h1>
        <Link to="/">
            <button>Voltar</button>
            </Link>
            
            <Link to="/applytotrip">
            <button>Inscrever-se</button>
            </Link>
        
        </div>
    );
    };

    export default TripList;