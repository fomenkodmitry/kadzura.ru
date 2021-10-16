import {RestService} from "../../utils/rest";
import {setArticle} from "./articlesSlice";
import {AppThunk} from "../../utils/redux";
import {ArticleListDto, ArticlePaged} from "../../models/Article";

export function thunkGetArticle(filter: ArticleListDto): AppThunk {
    return async (dispatch) => {
        const filters = JSON.stringify(filter.Filter)
        await RestService
            .GetInstance
            .GET<ArticlePaged>(
                `/api/v1/article?Paging.Page=${filter.Paging.Page}&Paging.Count=${filter.Paging.Count}&Filters=${filters}`
            )
            .then(p => dispatch(setArticle(p)))
            .catch(p => alert(p));
    }
}

