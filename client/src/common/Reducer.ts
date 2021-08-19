import {combineReducers} from 'redux';
import interviewQuestions from "../features/interviewQuestions/interviewQuestionsSlice";
import navbarMobileIsOpen from "../features/mobile/navbarMobileIsOpenSlice";
import tags from "../features/tags/tagSlice";

const reducer = combineReducers({
    interviewQuestions,
    navbarMobileIsOpen,
    tags
});

export type ReduxState = ReturnType<typeof reducer>;

export default reducer;
