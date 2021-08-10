import {Category} from "./Category";
import {PagedData} from "./PagedData";

type Article = {
    Id: string;
    DateCreated: string;
    Tittle: string;
    Text: string;
    Categories: Category[];
};

type ArticlePaged = PagedData<Article>;

export type { Article, ArticlePaged };