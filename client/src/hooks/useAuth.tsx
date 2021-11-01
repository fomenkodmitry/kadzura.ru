import {useNamedSelector} from "./useNamedSelector";
import {useHistory} from "react-router-dom";

export const useAuth = () => {
    const isLogin = useNamedSelector('login');
    const history = useHistory();
    if(!isLogin.isLogin)
        history.push('/admin/login')
}