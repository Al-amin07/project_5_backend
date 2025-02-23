export type TAuthor = {
  name: string;
  avatar: string;
  email: string;
};
export interface TBlog {
  title: string;
  description: string;
  category:
    | 'Technology'
    | 'Health & Wellness'
    | 'Lifestyle'
    | 'Business'
    | 'Education'
    | 'Entertainment';

  image: string;
  author: TAuthor;
  isPublished: boolean;
}
