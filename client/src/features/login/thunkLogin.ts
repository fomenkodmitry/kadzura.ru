import {RestService} from "../../utils/rest";
import {AppThunk} from "../../utils/redux";
import {LoginDto, LoginResponseDto} from "../../models/Login";
import {setIsAuth} from "./loginSlice";

export function thunkLogin(body: LoginDto): AppThunk {
    return async (dispatch) => {
        await RestService
            .GetInstance
            .POST<LoginResponseDto>(
                `/api/v1/auth/login`,
                {
                    body: JSON.stringify(body)
                }
            )
            .then((e) => {
                localStorage.setItem("token" ,e.authToken)
                dispatch(setIsAuth(true))
            })
            .catch((e) => alert(e));

    }
}

