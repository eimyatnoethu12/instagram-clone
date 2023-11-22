import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/commentActions';


function CommentForm({ postId,user }) {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(postId,  user, commentText ));
    setCommentText('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Add a comment:
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
    
    </>
    
  );
}

export default CommentForm;
