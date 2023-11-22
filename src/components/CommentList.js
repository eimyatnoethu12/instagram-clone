import React from 'react';

function CommentList({ comments }) {
  console.log("comments"+comments);
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default CommentList;
