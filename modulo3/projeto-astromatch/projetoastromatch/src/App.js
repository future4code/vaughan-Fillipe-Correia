import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element="CHAT PAGE" />

          <Route path="/individualchat" element="INDIVIDUAL CHAT PAGE" />
           
          <Route path="/home" element={<TinderCards />}>

          </Route>
          
           
        </Routes>
      </Router>
      <SwipeButtons />
    </div>
  );
}

export default App;
