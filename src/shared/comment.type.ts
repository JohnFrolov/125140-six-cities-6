import { User } from './index.js';

export type Comment = {
  text: string;
  publicationDate: Date;
  rating: number;
  author: User;
}
