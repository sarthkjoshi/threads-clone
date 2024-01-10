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
  password: AuthorType;
};
type CommentType = {
  id: 4;
  content: string;
  createdAt: string;
  authorId: number;
  postId: number;
  author: AuthorType;
};
