import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { addChatMessages } from "../store/chatSlice";
import { messageSize } from "../utils/constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);


  useEffect(() => {
    const timer = setInterval(() => {

      // These are just function to generate random names and message 
      const name = generateRandomName();
      const message = generateRandomMessage(messageSize);

      dispatch(
        addChatMessages({
          name: name,
          message: message,
        })
      );
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[550px] p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-scroll">
        <div>
          {messages.map((data, index) => (
            <ChatMessages key={index} name={data.name} message={data.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Aman Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 bg-slate-50"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
