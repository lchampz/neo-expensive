export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
  githubId?: string;
};

export type Error<T> = {
  field: T;
  message: string;
};

export type RefreshToken = {
  id: string;
  userid: string;
  expiresIn: number;
};