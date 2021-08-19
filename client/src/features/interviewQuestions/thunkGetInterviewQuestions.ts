import {InterviewQuestionListDto, InterviewQuestionPaged} from "../../models/InterviewQuestion";
import {RestService} from "../../utils/rest";
import {setInterviewQuestions} from "./interviewQuestionsSlice";
import {AppThunk} from "../../utils/redux";

export function thunkGetInterviewQuestions(filter: InterviewQuestionListDto): AppThunk {
    return async (dispatch) => {
        const filters = filter.Filters.length === 0 ? '[]' : JSON.stringify(filter.Filters)
        const result = await RestService
            .GetInstance
            .GET<InterviewQuestionPaged>(
                `/api/v1/interview-question?Paging.Page=${filter.Paging.Page}&Paging.Count=${filter.Paging.Count}&Filters=${filters}`
            );
        dispatch(setInterviewQuestions(result))
    }
}

