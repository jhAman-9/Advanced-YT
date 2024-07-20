import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../store/userSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  // Not working
  // const param = useParams();
  // console.log(param);

  const [param] = useSearchParams();
  const videoId = param.get("v");

  return (
    <>
      <div className="flex flex-col ml-3 w-full">
          <div className="px-5">
            <iframe
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        <CommentsContainer />
        </div>
      <LiveChat />
    </>
  );
};

export default WatchPage;
