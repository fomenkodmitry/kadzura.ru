import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";
import {TagCreate} from "../../models/Tag";

export function thunkCreateTag(body: TagCreate): AppThunk {
    return async () => {
        await RestService
            .GetInstance
            .POST(
                `/api/v1/tag`,
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