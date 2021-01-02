import { RouteComponentProps } from "react-router-dom";
import "./Home.css";

const Home: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <div className="home-wrapper">
      <h1>REACT APPS FOR BEGINNERS</h1>
      <button className="home-btn btn btn-primary" onClick={() => history.push("/React-Apps-for-Beginners/counter")}>Counter</button>
      <button className="home-btn btn btn-warning" onClick={() => history.push("/React-Apps-for-Beginners/randomuser")}>RandomUser API</button>
      <button className="home-btn btn btn-success" onClick={() => history.push("/React-Apps-for-Beginners/calculator")}>Calculator</button>
      <button className="home-btn btn btn-danger" onClick={() => history.push("/React-Apps-for-Beginners/hackernews")}>Hackernews</button>
    </div>
  );
}

export default Home;