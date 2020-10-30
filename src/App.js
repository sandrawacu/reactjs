import logo from './logo.svg';
//import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ContactUs from './pages/Contact Us'
import AboutUs from "./pages/About Us";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/join" component={Signup} />
            <Route path="/Call" component={ContactUs}/>
            <Route path="/About" component={AboutUs}/>
            <Route path="/"  exact={true} component={Home}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
