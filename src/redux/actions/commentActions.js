// export const addComment = (postId, comment) => ({
  
//     type: 'ADD_COMMENT',
//     payload: { postId, comment },
//   });

  export const addComment = (postId, user, text) => {
    // console.log(postId, user, text); // Add this line
    return {
      type: 'ADD_COMMENT',
      payload: { postId, comment: { user, text } },
    };
  };

  