const posts = [
  { id: 1,
     imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     caption: 'Caption 1',
      comments: [
        {name:"helen",text:"good morning"}
     ] },
  { id: 2,
     imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Caption 2', 
      comments: [
        {name:"mg mg",text:"good morning"}
      ] },
  // Add more dummy posts as needed
];

export const fetchPostsApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
};
