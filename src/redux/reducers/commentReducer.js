const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log('ADD_COMMENT payload:', action.payload);
      const { postId, comment } = action.payload;
      
      return {
        ...state,
        [postId]: {
          ...state[postId],
          comments: [{ name: comment.user, text: comment.text }],        },
      };
    // Add more cases for other comment-related actions if needed
    default:
      return state;
  }
};

export default commentReducer;
