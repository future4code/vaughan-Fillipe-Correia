import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const DummyTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
`;

const AdminPage = () => {
  return (
    <div className="adminpage">
      <h1>Admin Page</h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Link to="/createtripform">
        <button>Criar viagem</button>
      </Link>
      <Link to="/login">
        <button>Log out</button>
      </Link>
      <Link to="/tripdetail">
        <DummyTrip>
          <h2>Viagem 1</h2>
        </DummyTrip>
      </Link>
    </div>
  );
};

export default AdminPage;
