import {InterviewQuestionListDto, InterviewQuestionPaged} from "../../models/InterviewQuestion";
import {RestService} from "../../utils/rest";
import {setInterviewQuestions} from "./interviewQuestionsSlice";
import {AppThunk} from "../../utils/redux";

export function thunkGetInterviewQuestions(filter: InterviewQuestionListDto): AppThunk {
    return async (dispatch) => {
        const filters = JSON.stringify(filter.Filter)
        await RestService
            .GetInstance
            .GET<InterviewQuestionPaged>(
                `/api/v1/interview-question?Paging.Page=${filter.Paging.Page}&Paging.Count=${filter.Paging.Count}&Filters=${filters}`
            )
            .then(p => dispatch(setInterviewQuestions(p)))
            .catch(p => alert(p));
    }
}

