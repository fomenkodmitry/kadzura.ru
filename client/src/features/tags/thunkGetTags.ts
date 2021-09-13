import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";
import {setTags} from "./tagSlice";
import {TagPaged} from "../../models/Tag";

export function thunkGetTags(): AppThunk {
    return async (dispatch) => {
        await RestService
            .GetInstance
            .GET<TagPaged>(
                `/api/v1/tag?Paging.Page=1&Paging.Count=100&Filters=[]`
            )
            .then(p => dispatch(setTags(p)))
            .catch(p => alert(p));
    }
}

