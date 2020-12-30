import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import RandomUser from "./components/RandomUser/RandomUser";
import Calculator from "./components/Calculator/Calculator";
import hackernews from "./components/Hackernews/Hackernews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/randomuser" component={RandomUser} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/hackernews" component={hackernews} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
