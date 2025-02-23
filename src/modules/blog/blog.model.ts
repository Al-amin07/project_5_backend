import { model, Schema } from 'mongoose';
import { TAuthor, TBlog } from './blog.interface';
const authorSchema = new Schema<TAuthor>({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: authorSchema,
    isPublished: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      enum: [
        'Technology',
        'Health & Wellness',
        'Lifestyle',
        'Business',
        'Education',
        'Entertainment',
      ],
      required: true,
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogSchema);
