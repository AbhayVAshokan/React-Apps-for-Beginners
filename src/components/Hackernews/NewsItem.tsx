import axios from "axios";
import { useState, useEffect } from "react";

import "./NewsItem.css";

interface Props {
  newsId: string,
  news: Array<any>,
  setNews: (news: any) => any,
  setStaticNews: (news: any) => any
}

interface APIResponse {
  id: string,
  title: string,
  by: string,
  url: string,
  time: number,
  score: number
}


// Function to convert UNIX date time to custom format
const convertDate: (datetime: number) => string = (datetime) => {
  const months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date: Date = new Date(datetime * 1000);
  const minutes: string = "0" + date.getMinutes();

  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} ${date.getHours()}:${minutes.substr(-2)} IST`;
}

const NewsItem: React.FunctionComponent<Props> = (props: Props) => {
  const [newsItem, setNewsItem] = useState<APIResponse | null>(null);


  // Fetching individual news articles during after mount (API call)
  useEffect(() => {
    axios.get<APIResponse>(`https://hacker-news.firebaseio.com/v0/item/${props.newsId}.json`)
      .then(({ data }) => {
        props.news.forEach((item) => {
          if (item.id === data.id) {
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
        newsItem != null
          ? <a className="newsitem-url" href={newsItem.url}>
            <div className="newsitem-main">
              <p className="newsitem-title">{newsItem.title}</p>
              <p className="newsitem-time">{convertDate(newsItem.time)}</p>
            </div>
            <div className="newsitem-details">
              <p>by {newsItem.by}</p>
              {
                newsItem != null
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