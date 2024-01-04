type authStateType = {
  email?: string;
  password?: string;
  username?: string;
  name?: string;
};

type PostType = {
  id: number;
  content: string;
  createdAt: string;
  authorId: number;
  author: AuthorType;
};

type AuthorType = {
  id: number;
  username: string;
  email: string;
  name: string;
  password: AuthorType;
};
