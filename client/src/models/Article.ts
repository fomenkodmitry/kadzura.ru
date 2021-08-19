import {Tag} from "./Tag";
import {PagedData} from "./PagedData";

type Article = {
    Id: string;
    DateCreated: string;
    Tittle: string;
    Text: string;
    Tags: Tag[];
};

type ArticlePaged = PagedData<Article>;

export type { Article, ArticlePaged };