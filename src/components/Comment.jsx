// Comment.js
import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 border border-gray-300 mb-2">
      <p className="font-semibold">{comment.author}</p>
      <p className="text-gray-700">{comment.text}</p>
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-4 mt-2">
          {comment.replies.map((reply, index) => (
            <Comment key={index} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
