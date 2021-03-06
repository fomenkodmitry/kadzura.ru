import {Tag, TagDto} from "./Tag";
import {PagedData} from "./PagedData";
import {Paging} from "./Paging";
import {Filter} from "./Filters";

type InterviewQuestion = {
    id: string;
    dateCreated: string;
    question: string;
    answer: string;
    tags: Tag[];
}

type InterviewQuestionPaged = PagedData<InterviewQuestion>;

type InterviewQuestionListDto = {
    Paging: Paging
    Filter: Filter
}

type InterviewQuestionCreate = {
    question: string;
    answer: string;
    tags: TagDto[];
}

export type  {InterviewQuestion, InterviewQuestionPaged, InterviewQuestionListDto, InterviewQuestionCreate};