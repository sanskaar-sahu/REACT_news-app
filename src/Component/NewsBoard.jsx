import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([])
    const API_KEY = "8f4a80f473744904b1e9963d1a4d09d8";
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setArticles(data.articles);
          } catch (error) {
            console.error('Failed to fetch articles:', error);
          }
        };
    
        fetchArticles();
      }, [category]);
    
  return (
    <div>
      <h2 className="text-center mt-2" ><span >Latest</span> <span className="badge bg-danger ">News</span></h2>
      <div>
      {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        ))}
        </div> 
    </div>
  )
}

export default NewsBoard
