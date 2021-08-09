import {Category} from "./Category";
import {PagedData} from "./PagedData";

export interface Article {
    Id: string;
    DateCreated: string;
    Tittle: string;
    Text: string;
    Categories: Category[];
}

export type ArticlePaged = PagedData<Article>;