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
  comment_count: number;
  comment: CommentType;
};

type AuthorType = {
  id: number;
  username: string;
  email: string;
  name: string;
  password: string;
};
type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  authorId: number;
  postId: number;
  author: AuthorType;
};

type UserDeatailsType = {
  id: number;
  username: string;
  email: string;
  name: string;
  password: string;
  posts: [PostType];
};
