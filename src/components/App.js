import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../redux/actions/userActions'; // Corrected import paths
import { fetchPosts } from '../redux/actions/postActions'; // Corrected import path
import PostList from './PostList'; // Corrected import path
import SignInForm from './SignInForm'; // Corrected import path
import MenuBar from './UIForm/MenuBar';
// import SignUpForm from './SignUpForm'; // Corrected import path


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSignIn = (username) => {
    dispatch(signIn(username));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {user ? (
        <>
          <MenuBar user={user} handleSignOut={handleSignOut} />
        </>
      ) : (
        <div>
          <SignInForm onSignIn={handleSignIn} />
         
        </div>
      )}
    </div>
  );
}

export default App;
