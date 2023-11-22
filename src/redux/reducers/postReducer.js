const postReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      // Add more cases for other actions if needed
      default:
        return state;
    }
  };
  
  export default postReducer;
  