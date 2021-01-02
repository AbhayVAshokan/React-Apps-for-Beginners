import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import NewsItem from "./NewsItem";

interface NewsItemInterface {
  id: string,
  title?: string,
  by?: string,
  url?: string,
  time?: number,
  score?: number
}


// Function to create the API url from the filters
const createURL: (filter1: string) => string = (filter1: string) => {
  const storyType = filter1.replaceAll(" ", "").toLowerCase();
  const url = `https://hacker-news.firebaseio.com/v0/${storyType}.json`;
  return url;
}


const Hackernews: React.FunctionComponent<{}> = () => {
  const [filter1, setFilter1] = useState<string>("Top stories");
  let [news, setNews] = useState<Array<NewsItemInterface>>([]);
  let [staticNews, setStaticNews] = useState<Array<NewsItemInterface>>([]);
  const fetchNews = useRef(() => { });


  // Function to call the hackernews API
  fetchNews.current = () => {
    axios.get<Array<string>>(createURL(filter1))
      .then(({ data }) => {
        news = [];
        staticNews = [];

        data.forEach((item) => {
          news.push({
            id: item
          });
        });

        setStaticNews(news);
        setNews(news);
      });
  }

  // Function to performing searching
  const search = () => {
    const searchResults: Array<NewsItemInterface> = [];
    const searchString: unknown = document.getElementById("hackernews-searchtext")?.nodeValue;

    staticNews.forEach((newsItem) => {
      if (newsItem.title && newsItem.title.includes((searchString as string)))
        searchResults.push(newsItem);
    });

    setNews(searchResults);
  }


  // Fetching the list of news as per filter during mount.
  useEffect(() => {
    fetchNews.current();
  }, [fetchNews, filter1]);


  return (
    <div className="hackernews-wrapper">
      <Navbar filter1={filter1} setFilter1={setFilter1} fetchNews={() => fetchNews.current()} search={search} />
      {
        news.map((item: NewsItemInterface, key: any) => {
          return <NewsItem newsId={item.id} key={key} news={news} setNews={setNews} setStaticNews={setStaticNews} />
        })
      }
    </div>
  );
}

export default Hackernews;