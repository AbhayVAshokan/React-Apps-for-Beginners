import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import NewsItem from "./NewsItem";

const Hackernews = () => {
  const [filter1, setFilter1] = useState("Top stories");
  let [news, setNews] = useState([]);
  let [staticNews, setStaticNews] = useState([]);

  // Function to create the API url from the filters
  const createURL = () => {
    const storyType = filter1.replaceAll(" ", "").toLowerCase();
    const url = `https://hacker-news.firebaseio.com/v0/${storyType}.json`;
    return url;
  }

  // Function to call the hackernews API
  const fetchNews = useRef;
  fetchNews.current = () => {
    axios.get(createURL())
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
    const searchResults = [];
    const searchString = document.getElementById("hackernews-searchtext").value;
    
    staticNews.forEach((newsItem) => {
      if(newsItem.title && newsItem.title.includes(searchString))
        searchResults.push(newsItem);
    });

    setNews(searchResults);
  }

  useEffect(() => {
    fetchNews.current();
  }, [fetchNews, filter1]);

  return (
    <div className="hackernews-wrapper">
      <Navbar filter1={filter1} setFilter1={setFilter1} fetchNews={fetchNews} search={search}/>
      {
        news.map((item, key) => {
          return <NewsItem newsId={item.id} key={key} news={news} setNews={setNews} setStaticNews={setStaticNews}/>
        })
      }
    </div>
  );
}

export default Hackernews;