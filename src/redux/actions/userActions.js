export const signIn = (username) => ({
    type: 'SIGN_IN',
    payload: username,
  });
  
export const signOut = () => ({
    type: 'SIGN_OUT',
  });
  