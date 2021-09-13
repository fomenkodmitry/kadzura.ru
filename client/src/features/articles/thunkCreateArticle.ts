import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";
import {ArticleCreate} from "../../models/Article";

export function thunkCreateArticle(body: ArticleCreate): AppThunk {
    return async () => {
        await RestService
            .GetInstance
            .POST(
                `/api/v1/article`,
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