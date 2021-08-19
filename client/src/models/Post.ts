import {Tag} from "./Tag";
import {PagedData} from "./PagedData";

type Post = {
    Id: string;
    DateCreated: string;
    Title: string;
    Text: string;
    Categories: Tag[];
    IsArticle: boolean
}

type PostPaged = PagedData<Post>;

export type  { PostPaged, Post };