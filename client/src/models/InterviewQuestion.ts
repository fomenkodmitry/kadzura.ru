import {Category} from "./Category";
import {PagedData} from "./PagedData";

type InterviewQuestion = {
    Id: string;
    DateCreated: string;
    Question: string;
    Answer: string;
    Categories: Category[];
}

type InterviewQuestionPaged = PagedData<InterviewQuestion>;


export type  { InterviewQuestion, InterviewQuestionPaged };