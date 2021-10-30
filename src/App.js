import './App.css';
import Nav from './component/NavBar/Nav';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Nav></Nav>
      <Switch>
          <Route  exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
      </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
