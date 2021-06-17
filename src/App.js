import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Hero/>
      </Router>
    </div>
  );
}

export default App;
