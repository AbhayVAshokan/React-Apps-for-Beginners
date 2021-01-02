import "./Navbar.css";

interface Props {
  search: () => void,
  fetchNews: () => void,
  filter1: string,
  setFilter1: (filter: string) => void
}

const Navbar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <nav className="hackernews-navbar">
      <div className="navbar-main">
        <input id="hackernews-searchtext" className="hackernews-search" type="text" onInput={props.search}></input>
        <button className="btn btn-outline-danger fetch-news-btn" onClick={props.fetchNews}>Fetch News</button>
        <img className="hackernews-logo" src="https://cdn4.iconfinder.com/data/icons/socialcones/508/HackerNews-512.png" alt="hackernews logo" />
      </div>
      <div className="news-filters">
        <p className="filter-text">Search for</p>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.filter1}</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item" onClick={() => props.setFilter1("Top stories")}>Top stories</div>
            <div className="dropdown-item" onClick={() => props.setFilter1("New stories")}>New stories</div>
            <div className="dropdown-item" onClick={() => props.setFilter1("Best stories")}>Best stories</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;