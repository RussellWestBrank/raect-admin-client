import "./App.css"
import { Button } from "antd"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/admin";

function App() {
  return (
   <Router>
     <Switch>
       <Route path='/login'><Login /></Route>
       <Route path='/'><Admin /></Route>
     </Switch>
   </Router>
  )
}

export default App
