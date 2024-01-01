type authStateType = {
  email?: string;
  password?: string;
  username?: string;
  name?: string;
};

type postStateType = {
  content: string;
  authorId: number;
};

type Post = [
  {
    id: number;
    content: string;
  }
];
