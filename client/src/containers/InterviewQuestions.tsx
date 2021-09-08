import React, {useEffect, useState} from "react";
import {InterviewQuestionList} from "../components/InterviewQuestionList";
import {clearInterviewQuestions} from "../features/interviewQuestions/interviewQuestionsSlice";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetInterviewQuestions} from "../features/interviewQuestions/thunkGetInterviewQuestions";

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
                Filters: [],
                Paging: {
                    Page: page,
                    Count: 20
                }
            }
            if (tagSelector?.data?.length != 0) {
                filter.Filters = [...filter.Filters,
                    {
                        field: "tags.tagId",
                        operation: "equal",
                        values: [...tagSelector?.data?.map(p => p.id)]
                    }
                ]
            }
            if (search?.text.length) {
                filter.Filters = [...filter.Filters,
                    {
                        field: "fulltext",
                        operation: "contains",
                        values: [search.text]
                    }
                ]
            }
            dispatch(thunkGetInterviewQuestions(filter))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearInterviewQuestions())
        setPage(1)
    }, [tagSelector, search])
    
    return (
        <InterviewQuestionList list={interviewQuestions} onPageChange={onPageChange} page={page}/>
    );
}