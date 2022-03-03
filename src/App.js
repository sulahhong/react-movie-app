import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";


function App() {
   return (
      <Router>
      <Switch>
         <Navbar />
      <Route path="/movie/:id"> 
         <Detail/>
         </Route>
         <Route path="/" >
         <Home/>
         </Route>
      </Switch>
      </Router>
         );
}

export default App;   