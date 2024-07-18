import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../store/userSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSideBar())
    }, [])
    
    // Not working
    // const param = useParams();
    // console.log(param);

    const [param] = useSearchParams();
    const videoId = param.get('v')

  return (
    <div className="px-20 py-3">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WatchPage