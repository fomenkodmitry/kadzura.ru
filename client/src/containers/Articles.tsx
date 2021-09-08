﻿import React, {FC, useEffect, useState} from "react";
import {ArticleList} from "../components/ArticleList";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetArticle} from "../features/articles/thunkGetIArticle";
import {clearArticle} from "../features/articles/articleSlice";
import {useDispatch} from "react-redux";

export const Articles: FC = () => {
  
    const dispatch = useDispatch();
    const article = useNamedSelector('article')
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
            dispatch(thunkGetArticle(filter))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearArticle())
        setPage(1)
    }, [tagSelector, search])
    
    return (
        <ArticleList list={article} page={page} onPageChange={onPageChange}/>
    );
}