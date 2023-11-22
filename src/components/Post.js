import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faComment,faPaperPlane,faBookmark } from '@fortawesome/free-solid-svg-icons'
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Post({ post,user }) {
  // Inside Post.js or relevant component
console.log('Post Comments:', post);

  return (
    <div className='w-full pl-14 ml-4 '>
      <img src={post.imageUrl} alt={post.caption} className='w-5/6' />
     <div className='mt-4 flex justify-around -ml-32 text-lg'>
     <div className='text-lg flex gap-3 cursor-pointer'>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className='cursor-pointer'>
      <FontAwesomeIcon icon={faBookmark} />
      </div>
     </div>
      <p>{post.caption}</p>
     
      
      <CommentList comments={post.comments} />
      <CommentForm postId={post.id} user={user} />
      {/* Add actions (comment, share, save) */}
    </div>
  );
}

export default Post;
