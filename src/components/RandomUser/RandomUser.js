import { useState } from "react";
import axios from "axios";
import RandomUserItem from "./RandomUserItem";

import "./RandomUser.css";

const RandomUser = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [page, setPage] = useState(1);

    // API to fetch random users
    const fetchRandomUser = () => {
        axios.get(`https://randomuser.me/api?page=${page}`)
            .then(({ data }) => {
                randomUsers.push({
                    name: `${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}`,
                    picture: data.results[0].picture.large
                });

                setPage(page + 1);
                setRandomUsers(randomUsers);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="random-user-wrapper">
            <div className="random-user-items">
                {
                    randomUsers.length === 0
                        ? <h1>No data available</h1>
                        : randomUsers.map((randomUser) => {
                            return RandomUserItem(randomUser);
                        })
                }
            </div>
            <button className="btn btn-outline-success" onClick={fetchRandomUser}>Fetch Random User</button>
        </div>
    );
}

export default RandomUser;