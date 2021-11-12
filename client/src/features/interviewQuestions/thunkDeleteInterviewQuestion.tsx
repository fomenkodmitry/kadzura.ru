import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";

export function thunkDeleteInterviewQuestion(id: string): AppThunk {
    return async () => {
        await RestService
            .GetInstance
            .DELETE(
                `/api/v1/interview-question/${id}`,
                {
                    headers: {
                        ['Authorization']: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            .then((e) => {
                alert("Deleted")
            })
            .catch((e) => alert(e));
    }
}