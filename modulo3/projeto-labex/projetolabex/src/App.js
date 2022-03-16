import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import LoginPage from "./components/LoginPage";
import TripList from "./components/TripList";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import AdminPage from "./components/AdminPage";
import ApplyToTrip from "./components/ApplyToTrip";
import CreateTripForm from "./components/CreateTripForm";
import TripDetail from "./components/TripDetail";
import ErrorPage from "./components/ErrorPage";
import './App.css';




const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/triplist" element={<TripList />} />

          <Route path="/" element={<HomePage />} />

          <Route path="adminpage" element={<AdminPage />} />

          <Route path="/applytotrip" element={<ApplyToTrip />} />

          <Route path="/createtripform" element={<CreateTripForm />} />

          <Route path="/tripdetail/:id" element={<TripDetail />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
