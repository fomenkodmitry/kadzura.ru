﻿import {RestService} from "../../utils/rest";
import {setArticle} from "./articleSlice";
import {AppThunk} from "../../utils/redux";
import {ArticlePaged} from "../../models/Article";

export function thunkGetByIdArticle(articleId: string): AppThunk {
    return async (dispatch) => {
        const result = await RestService
            .GetInstance
            .GET<ArticlePaged>(
                `/api/v1/article?Paging.Page=1&Paging.Count=1&Filters=[{
                        field: "id",
                        operation: "equal",
                        values: [${articleId}]
                    }]`
            );
        dispatch(setArticle(result?.data?.[0]))
    }
}
