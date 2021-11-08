import React, {FC, useEffect, useState} from "react";
import {ArticleList} from "../components/ArticleList";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetArticle} from "../features/articles/thunkGetArticle";
import {clearArticle} from "../features/articles/articlesSlice";
import {useDispatch} from "react-redux";
import {setIsShowFilters} from "../features/layout/layoutSlice";
import {Fabs} from "../components/Fabs";

const Count: number = 30
export const Articles: FC = () => {

    const dispatch = useDispatch();
    const articles = useNamedSelector('articles')
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
                        '0': [
                            {
                                '%text%': [search.text],
                            },
                            {
                                '%title%': [search.text]
                            }
                        ],
                        ...filter.Filter,
                    }
                ]
            }
            dispatch(thunkGetArticle(filter))
            dispatch(setIsShowFilters({isShowFilters: true}))
        },
        [dispatch, tagSelector, page, search]
    )

    useEffect(() => {
        dispatch(clearArticle())
        setPage(1)
    }, [tagSelector, search])
    
    return (
        <>
            <ArticleList list={articles} page={page} onPageChange={onPageChange} count={Count}/>
            <Fabs createUrl={"/admin/article/create"}/>
        </>
    );
}