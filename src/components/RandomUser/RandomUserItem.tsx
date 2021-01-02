import "./RandomUserItem.css";

interface Props {
    name: string,
    picture: string
}

const RandomUserItem: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="random-user-item-wrapper">
            <h2 className="random-user-name">{props.name}</h2>
            <img className="random-user-profile" src={props.picture} alt="Profile"></img>
        </div>
    );
}

export default RandomUserItem;