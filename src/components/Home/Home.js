import "./Home.css";

const Home = ({ history }) => {
    return (
        <div className="home-wrapper">
            <h1>REACT APPS FOR BEGINNERS</h1>
            <button className="home-btn btn btn-primary" onClick={() => history.push("/counter")}>Counter</button>
            <button className="home-btn btn btn-warning" onClick={() => history.push("/randomuser")}>RandomUser API</button>
            <button className="home-btn btn btn-success" onClick={() => history.push("/calculator")}>Calculator</button>
            <button className="home-btn btn btn-danger" onClick={() => history.push("/hackernews")}>Hackernews</button>
        </div>
    );
}

export default Home;