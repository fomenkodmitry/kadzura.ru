import {PagedData} from "./PagedData";

type TagValue = {
    id: number,
    name: string
}

type Tag = {
    tag: TagValue
};

type TagPaged = PagedData<TagValue>;

type SelectorTag = {
    data: string[]
};

export type  {Tag, TagValue, TagPaged, SelectorTag}