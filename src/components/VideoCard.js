import React from "react";

const VideoCard = ({ info }) => {
  const snippet = info?.snippet;
  const statistics = info?.statistics;

  return (
    <div className="p-2 m-2 shadow-lg w-80">
      <img
        src={snippet?.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold">{snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <div className="flex">
          <li>{statistics?.viewCount} views</li>
          <li className="ml-3">{snippet?.publishedAt.toLocaleString()}</li>
        </div>
      </ul>
    </div>
  );
};


// Higher Order Component
export const HOC = ({ info }) => {
  return (
    <div className="p-1 m-1 border-teal-900 bg-pink-300 rounded-lg">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
