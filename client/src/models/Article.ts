import {Tag, TagDto} from "./Tag";
import {PagedData} from "./PagedData";
import {Paging} from "./Paging";
import {Filters} from "./Filters";

type Article = {
    id: string;
    dateCreated: string;
    title: string;
    text: string;
    tags: Tag[];
};

type ArticlePaged = PagedData<Article>;

type ArticleListDto = {
    Paging: Paging
    Filters: Filters
}

type ArticleCreate = {
    title: string;
    text: string;
    tags: TagDto[];
}

export type { Article, ArticlePaged, ArticleListDto, ArticleCreate };