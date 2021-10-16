import {Tag, TagDto} from "./Tag";
import {PagedData} from "./PagedData";
import {Paging} from "./Paging";
import {Filter} from "./Filters";

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
    Filter: Filter
}

type ArticleCreate = {
    title: string;
    text: string;
    tags: TagDto[];
}

export type { Article, ArticlePaged, ArticleListDto, ArticleCreate };