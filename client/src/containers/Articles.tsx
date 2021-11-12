import React, {FC, useEffect, useState} from "react";
import {ArticleList} from "../components/ArticleList";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {InterviewQuestionListDto} from "../models/InterviewQuestion";
import {thunkGetArticle} from "../features/articles/thunkGetArticle";
import {clearArticle} from "../features/articles/articlesSlice";
import {useDispatch} from "react-redux";
import {setIsShowFilters} from "../features/layout/layoutSlice";
import {Fabs} from "../components/Fabs";
import {useHistory} from "react-router-dom";
import {thunkDeleteArticle} from "../features/articles/thunkDeleteArticle";
import {useAuth} from "../hooks/useAuth";
import {useForceUpdate} from "../hooks/useForceUpdate";

const Count: number = 30
export const Articles: FC = () => {

    const dispatch = useDispatch();
    const articles = useNamedSelector('articles')
    const tagSelector = useNamedSelector('tagsSelector')
    const search = useNamedSelector('search')

    const [trigger, updateTrigger] = useForceUpdate();
    const remove = async (id: string) => {
        await dispatch(thunkDeleteArticle(id))
        updateTrigger()
    }

    const isAuth = useAuth()
    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };
    
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
        [dispatch, tagSelector, page, search, trigger]
    )

    useEffect(() => {
        dispatch(clearArticle())
        setPage(1)
    }, [tagSelector, search, trigger])
    
    return (
        <>
            <ArticleList list={articles} onPageChange={onPageChange} count={Count} toLink={toLink} isAuth={isAuth} removeAction={remove}/>
            <Fabs createUrl={"/admin/article/create"}/>
        </>
    );
}