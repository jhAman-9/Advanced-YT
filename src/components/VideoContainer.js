import React, { useEffect, useState } from "react";
import { YOUTUBE_VIEDOS_API } from "../utils/constants";
import VideoCard, { HOC } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIEDOS_API);
    const json = await data.json();
    setVideos(json?.items)
  };


  return (
    <div className="flex flex-wrap">
      
      {videos[0] && <HOC info={videos[0]} />}
      
      {videos.map((video) => (
        <Link to={'/watch?v=' + video?.id}>
          {" "}
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
