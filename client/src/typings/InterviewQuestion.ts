import {Category} from "./Category";
import {PagedData} from "./PagedData";

export interface InterviewQuestion {
    Id: string;
    DateCreated: string;
    Question: string;
    Answer: string;
    Categories: Category[];
}

export type InterviewQuestionPaged = PagedData<InterviewQuestion>;