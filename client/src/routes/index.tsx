import {Route} from "../models/Route";
import PageArticle from "../pages/PageArticle";
import PageInterviewQuestions from "../pages/PageInterviewQuestions";
import PageAdminLogin from "../pages/PageAdminLogin";
import PageAdminArticleCreate from "../pages/PageAdminArticleCreate";
import PageAdminInterviewQuestionCreate from "../pages/PageAdminInteviewQuestionCreate";
import PageArticleDetail from "../pages/PageArticleDetail";
import PageAdminTagCreate from "../pages/PageAdminTagCreate";

const ROUTES: Route[] = [
    {
        id: 1,
        path: '/',
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
        path: '/admin/login',
        page: PageAdminLogin,
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
    {
        id: 7,
        path: '/article/:articleId',
        page: PageArticleDetail,
        withLayout: true
    },
    {
        id: 7,
        path: '/admin/tag/create',
        page: PageAdminTagCreate,
        withLayout: false
    },
];

export { ROUTES };
