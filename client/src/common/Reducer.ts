import {combineReducers} from 'redux';
import interviewQuestions from "../features/interviewQuestions/interviewQuestionsSlice";
import counterTest from "../features/counter/counterSlice";
import mobileIsOpen from "../features/mobile/mobileIsOpenSlice";

const reducer = combineReducers({
    interviewQuestions,
    counterTest,
    mobileIsOpen
});

export type ReduxState = ReturnType<typeof reducer>;

export default reducer;
