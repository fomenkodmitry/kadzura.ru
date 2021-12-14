import React, {useEffect, useState} from "react";
import {InterviewQuestionList} from "../components/InterviewQuestionList";
import {clearInterviewQuestions} from "../features/interviewQuestions/interviewQuestionsSlice";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetInterviewQuestions} from "../features/interviewQuestions/thunkGetInterviewQuestions";
import {setIsShowFilters} from "../features/layout/layoutSlice";
import {Fabs} from "../components/Fabs";
import {useForceUpdate} from "../hooks/useForceUpdate";
import {thunkDeleteArticle} from "../features/articles/thunkDeleteArticle";
import {thunkDeleteInterviewQuestion} from "../features/interviewQuestions/thunkDeleteInterviewQuestion";
import {useAuth} from "../hooks/useAuth";


const Count: number = 30
export const InterviewQuestions: React.FC = () => {

    const dispatch = useDispatch();
    const interviewQuestions = useNamedSelector('interviewQuestions')
    const tagSelector = useNamedSelector('tagsSelector')
    const search = useNamedSelector('search')
    const [trigger, updateTrigger] = useForceUpdate();
    const remove = async (id: string) => {
        await dispatch(thunkDeleteInterviewQuestion(id))
        updateTrigger()
    }
    const isAuth = useAuth()
    const [page, setPage] = useState(1)
    const onPageChange = () => {
        setPage(page + 1)
    }

    useEffect(() => {
            const filter: InterviewQuestionListDto = {
                Filter: [],
                Paging: {
                    Page: page,
                    Count: Count
                }
            }
            if (tagSelector?.data?.length != 0) {
                filter.Filter =
                    {
                        '=tags.tagId': [...tagSelector?.data]
                    }
            }
            if (search.text?.length) {
                filter.Filter = {
                    '0': [
                        {
                            '%question%': [search.text],
                        },
                        {
                            '%answer%': [search.text]
                        }
                    ],
                    ...filter.Filter,
                }
            }
            dispatch(thunkGetInterviewQuestions(filter))
        },
        [dispatch, tagSelector, page, search, trigger]
    )

    useEffect(() => {
        dispatch(clearInterviewQuestions())
        dispatch(setIsShowFilters({isShowFilters: true}))
        setPage(1)
    }, [tagSelector, search, trigger])

    return (
        <>
            <InterviewQuestionList list={interviewQuestions} onPageChange={onPageChange} count={Count} removeAction={remove} isAuth={isAuth}/>
            <Fabs createUrl={"/admin/interview-question/create"}/>
        </>
    );
}