import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";

const TripDetail = () => {
  return (
    <div>
      <h1>Trip Detail</h1>
      <Link to="/adminpage">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default TripDetail;
