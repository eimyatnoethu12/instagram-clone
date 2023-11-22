import { fetchPostsApi } from '../../services/api';

export const fetchPosts = () => async (dispatch) => {
  const posts = await fetchPostsApi();
  dispatch({ type: 'FETCH_POSTS', payload: posts });
};
