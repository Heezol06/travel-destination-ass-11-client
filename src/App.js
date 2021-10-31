import './App.css';
import Nav from './component/NavBar/Nav';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import PlanDetails from './component/PlanDetails/PlanDetails';
import AuthProvider from './component/Context/AuthProvider';
import MyBooking from './component/MyBooking/MyBooking';
import EditOrders from './component/EditOrders/EditOrders';
import AddPlans from './component/AddPlans/AddPlans';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivetRoute path="/planDetails/:planId">
        <PlanDetails></PlanDetails>
        </PrivetRoute>
          <PrivetRoute path="/myBooking">
        <MyBooking></MyBooking>
        </PrivetRoute>
          <PrivetRoute path="/update/:plansId">
        <EditOrders></EditOrders>
        </PrivetRoute>
          <PrivetRoute path="/update">
        <EditOrders></EditOrders>
        </PrivetRoute>
          <PrivetRoute path="/newPlan">
        <AddPlans></AddPlans>
        </PrivetRoute>
      </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
