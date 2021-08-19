import {Tag} from "./Tag";
import {PagedData} from "./PagedData";
import {Paging} from "./Paging";
import {Filters} from "./Filters";

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
    Filters: Filters
}

export type  {InterviewQuestion, InterviewQuestionPaged, InterviewQuestionListDto};