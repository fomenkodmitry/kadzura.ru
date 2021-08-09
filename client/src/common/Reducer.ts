import {combineReducers} from 'redux';
import interviewQuestions from "../features/interviewQuestions/interviewQuestionsSlice";
import counterTest from "../features/counter/counterSlice";

const reducer = combineReducers({
    interviewQuestions,
    counterTest
});

export type ReduxState = ReturnType<typeof reducer>;

export default reducer;
