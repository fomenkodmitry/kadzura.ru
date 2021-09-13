import {RestService} from "../../utils/rest";
import {setArticle} from "./articleSlice";
import {AppThunk} from "../../utils/redux";
import {ArticlePaged} from "../../models/Article";

export function thunkGetByIdArticle(articleId: string): AppThunk {
    return async (dispatch) => {
        await RestService
            .GetInstance
            .GET<ArticlePaged>(
                `/api/v1/article?Paging.Page=1&Paging.Count=1&Filters=[{
                        field: "id",
                        operation: "equal",
                        values: [${articleId}]
                    }]`
            )
            .then(p => dispatch(setArticle(p?.data?.[0])))
            .catch(p => alert(p));
    }
}