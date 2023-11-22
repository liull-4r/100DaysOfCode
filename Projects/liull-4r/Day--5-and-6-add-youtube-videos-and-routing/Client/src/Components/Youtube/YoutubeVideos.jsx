import { useState, useEffect } from "react";

import "./youtube.css";
function YoutubeVideos() {
  const [youTubeVideos, setyouTubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "your-json-file-url"

   
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setyouTubeVideos(data.items);
      });
  }, []);

  console.log(youTubeVideos);
  

  
  return (
    <>
      <h1>Latest Videos</h1>
      <div className="video-wrapper">
        {youTubeVideos.map((video, i) => {
          let id = video.id.videoId;
          return (
            <div key={i} className="video-container">
              <div>
                <a
                  className="video-link"
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={video.snippet.thumbnails.high.url} alt="" />
                  <br />
                  <br />
                  <h5>{video.snippet.title}</h5>
                  <p>{video.snippet.description}</p>
                </a>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default YoutubeVideos;
