import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {ReduxState} from "../common/Reducer";

/**
 * Тип для всех санок
 */
export type AppThunk = ThunkAction<void, ReduxState, null, Action<string>>
