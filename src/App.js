import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Calculator from './components/Calculator/Calculator';
import RandomUser from './components/RandomUser/RandomUser';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
