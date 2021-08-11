import {Route} from "../models/Route";
import PageMain from "../pages/PageMain";
import PageArticle from "../pages/PageArticle";
import PageInterviewQuestions from "../pages/PageInterviewQuestions";
import PageAdminAuth from "../Pages/PageAdminAuth";
import PageAdminArticleCreate from "../Pages/PageAdminArticleCreate";
import PageAdminInterviewQuestionCreate from "../Pages/PageAdminInteviewQuestionCreate";

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
        withLayout: true
    },
    {
        id: 5,
        path: '/admin/article/create',
        page: PageAdminArticleCreate,
        withLayout: true
    },
    {
        id: 6,
        path: '/admin/interview-question/create',
        page: PageAdminInterviewQuestionCreate,
        withLayout: true
    },
    
];

export { ROUTES };
