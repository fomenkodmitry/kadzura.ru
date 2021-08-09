import {useSelector} from "react-redux";
import {ReduxState} from "../common/Reducer";

export function useNamedSelector<K extends keyof ReduxState>(field: K): ReduxState[K] {
    return useSelector((state: ReduxState) => state[field]);
}