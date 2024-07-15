import React from "react"

const NewsItem = ({title , description , src , url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 w-10 " style={{maxWidth:"30%"}}>
    <img src={src?src:"https://static.vecteezy.com/system/resources/previews/002/124/399/original/breaking-news-background-tv-channel-news-screensaver-illustration-free-vector.jpg"} className="card-img-top" alt="link of image" style={{width:"320px" , height:"200px"}}/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,100):"According to the Indian NewToNews Times our team is working to fetch more details regardin it "}...</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
   </div>
  )
}

export default NewsItem
