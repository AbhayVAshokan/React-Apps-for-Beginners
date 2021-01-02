import { useState } from "react";
import axios from "axios";
import RandomUserItem from "./RandomUserItem";

import "./RandomUser.css";

// Interface for randomUsers array: to store all the random users obtained from the API
interface RandomUserInterface {
  name: string,
  picture: string
};

// Interface for response of the random user API
interface APIResponse {
  results: Array<{
    name: {
      title: string,
      first: string,
      last: string
    },
    picture: {
      small: string,
      medium: string,
      large: string
    }
  }>
};

const RandomUser: React.FunctionComponent<{}> = () => {
  const [randomUsers, setRandomUsers] = useState<Array<RandomUserInterface>>([]);
  const [page, setPage] = useState<number>(1);

  // API to fetch random users
  const fetchRandomUser = () => {
    axios.get<APIResponse>(`https://randomuser.me/api?page=${page}`)
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
              return <RandomUserItem name={randomUser.name} picture={randomUser.picture} />;
            })
        }
      </div>
      <button className="btn btn-outline-success" onClick={fetchRandomUser}>Fetch Random User</button>
    </div>
  );
}

export default RandomUser;