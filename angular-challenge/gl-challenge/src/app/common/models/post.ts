import {Comment} from "./comment";

export interface Post {
  id: number,
  userId: number
  body?: string,
  title?: string,
  comments?: Comment[]
}
