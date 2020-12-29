import "./RandomUserItem.css";

const RandomUserItem = (props) => {
    return (
        <div className="random-user-item-wrapper">
            <h2 className="random-user-name">{props.name}</h2>
            <img className="random-user-profile" src={props.picture} alt="Profile"></img>
        </div>
    );
}

export default RandomUserItem;