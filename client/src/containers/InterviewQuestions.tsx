import React, {useEffect, useState} from "react";
import {InterviewQuestionList} from "../components/InterviewQuestionList";
import {clearInterviewQuestions} from "../features/interviewQuestions/interviewQuestionsSlice";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetInterviewQuestions} from "../features/interviewQuestions/thunkGetInterviewQuestions";
import {setIsShowFilters} from "../features/layout/layoutSlice";

const Count: number = 20
export const InterviewQuestions: React.FC = () => {

    const dispatch = useDispatch();
    const interviewQuestions = useNamedSelector('interviewQuestions')
    const tagSelector = useNamedSelector('tagsSelector')
    const search = useNamedSelector('search')

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
                filter.Filter = [
                    {
                        ...filter.Filter,
                        '%answer%': [search.text]
                    },
                    {
                        ...filter.Filter,
                        '%question%': [search.text]
                    }
                ]
            }
            dispatch(thunkGetInterviewQuestions(filter))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearInterviewQuestions())
        dispatch(setIsShowFilters({isShowFilters: true}))
        setPage(1)
    }, [tagSelector, search])

    return (
        <InterviewQuestionList list={interviewQuestions} onPageChange={onPageChange} page={page} count={Count}/>
    );
}