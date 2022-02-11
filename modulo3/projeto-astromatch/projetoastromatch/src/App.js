import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TinderCards from "./components/TinderCards";
import Profile from "./components/Profile";
import Chat from "./components/Chat";

const App = () => {


  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/chat" element={<Chat />} />

          <Route path="/profile" element={<Profile />} />
           
          <Route path="/" element={<TinderCards />}>

          </Route>
          
           
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
