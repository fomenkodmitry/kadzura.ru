import {Category} from "./Category";
import {PagedData} from "./PagedData";

type Post = {
    Id: string;
    DateCreated: string;
    Title: string;
    Text: string;
    Categories: Category[];
    IsArticle: boolean
}

type PostPaged = PagedData<Post>;

export type  { PostPaged, Post };