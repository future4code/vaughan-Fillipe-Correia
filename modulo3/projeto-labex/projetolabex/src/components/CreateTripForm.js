import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";


const CreateTripForm = () => {
    return (
        <div>
      <h1>Create Trip Form</h1>
      <Link to="/createtripform">
        <button>Enviar</button>
      </Link>

      <Link to="/adminpage">
        <button>Voltar</button>
      </Link>
    </div>
    );
};

export default CreateTripForm;