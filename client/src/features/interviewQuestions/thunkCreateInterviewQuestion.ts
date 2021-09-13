import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";
import {InterviewQuestionCreate} from "../../models/InterviewQuestion";

export function thunkCreateInterviewQuestion(body: InterviewQuestionCreate): AppThunk {
    return async () => {
        await RestService
            .GetInstance
            .POST(
                `/api/v1/interview-question`,
                {
                    body: JSON.stringify(body),
                    headers: {
                        ['Authorization']: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            .then((e) => {
                alert("ok")
            })
            .catch((e) => alert(e));
    }
}