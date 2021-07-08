import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Contribute from "./components/pages/contribute/Contribute";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Switch>
              <Route path="/" exact component = {Home} />
              <Route path="/library" component = {Library}/>
              <Route path="/contribute" component = {Contribute}/>
              <Route path="/login" component = {Login}/>
              <Route path="/logout" component = {Logout}/>
              <Route path="/register" component = {Register}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
