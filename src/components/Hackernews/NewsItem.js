import axios from "axios";
import { useState, useEffect } from "react";

import "./NewsItem.css";

const convertDate = (datetime) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(datetime * 1000);
    const minutes = "0" + date.getMinutes();

    const formattedTime = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} ${date.getHours()}:${minutes.substr(-2)} IST`;

    return formattedTime;
}

const NewsItem = (props) => {
    const [newsItem, setNewsItem] = useState({});

    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${props.newsId}.json`)
            .then(({ data }) => {
                props.news.forEach((item) => {
                    if(item.id === data.id) {
                        item.title = data.title;
                    }
                });
                props.setNews(props.news);
                props.setStaticNews(props.news);
                setNewsItem(data)
            });
    }, [props]);

    return (
        <div className="newsitem-wrapper">
            {
                newsItem.title !== undefined
                    ? <a className="newsitem-url" href={newsItem.url}>
                        <div className="newsitem-main">
                            <p className="newsitem-title">{newsItem.title}</p>
                            <p className="newsitem-time">{convertDate(newsItem.time)}</p>
                        </div>
                        <div className="newsitem-details">
                            <p>by {newsItem.by}</p>
                            {
                                newsItem.score !== undefined
                                    ? <p className="newsitem-score">score: {newsItem.score}</p>
                                    : <></>
                            }
                        </div>
                    </a>
                    
                    : <></>
            }
        </div>
    );
}

export default NewsItem;