import {useNamedSelector} from "./useNamedSelector";

export const useAuth = () => {
    return useNamedSelector('login').isLogin;
}