import React from 'react'
import { commentsData } from '../utils/helper';

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-md bg-gray-100 rounded-lg py-2 cursor-pointer hover:bg-gray-300 ">
      <img alt='profile-logo' className='w-10 h-10 m-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABGD5o9Iba5FaOmeKhcu5GLCeB5o53Lw1gAfGNzcLrLdlBOAnUvmkGIjQU6LzcYM-qwQ&usqp=CAU" />
      <div className=" ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

const CommentsList = ({comments}) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment?.relies} />
      </div>
    </div>
  ));
}

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-2xl font-bold my-1">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer