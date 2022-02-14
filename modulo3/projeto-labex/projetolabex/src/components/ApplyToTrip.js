import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";

const ApplyToTrip = () => {
  return (
    <div>
      <h1>Apply To Trip</h1>
      <Link to="/applytotrip">
        <button>Enviar</button>
      </Link>

      <Link to="/triplist">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default ApplyToTrip;
