import PageMain from "../pages/PageMain";
import {Route} from "../models/Route";
import PageArticle from "../pages/PageArticle";
import PageInterviewQuestions from "../pages/PageInterviewQuestions";
import PageAdminAuth from "../pages/PageAdminAuth";
import PageAdminArticleCreate from "../pages/PageAdminArticleCreate";
import PageAdminInterviewQuestionCreate from "../pages/PageAdminInteviewQuestionCreate";

const ROUTES: Route[] = [
    {
        id: 1,
        path: '/',
        page: PageMain,
        withLayout: true
    },
    {
        id: 2,
        path: '/article',
        page: PageArticle,
        withLayout: true
    },
    {
        id: 3,
        path: '/interview-questions',
        page: PageInterviewQuestions,
        withLayout: true
    },
    {
        id: 4,
        path: '/admin/auth',
        page: PageAdminAuth,
        withLayout: false
    },
    {
        id: 5,
        path: '/admin/article/create',
        page: PageAdminArticleCreate,
        withLayout: false
    },
    {
        id: 6,
        path: '/admin/interview-question/create',
        page: PageAdminInterviewQuestionCreate,
        withLayout: false
    },
    
];

export { ROUTES };
