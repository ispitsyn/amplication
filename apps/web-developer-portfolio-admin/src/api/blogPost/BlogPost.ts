export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  content: string | null;
  publishedDate: Date | null;
  postTitle: string | null;
  postContent: string | null;
  postPublishedDate: Date | null;
};
