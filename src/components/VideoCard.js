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

export default VideoCard;
