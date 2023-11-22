import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

function PostList({user}) {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </div>
  );
}

export default PostList;
