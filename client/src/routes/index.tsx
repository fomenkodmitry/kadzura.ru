import {Route} from "../models/Route";
import PageMain from "../pages/PageMain";
import PageArticle from "../pages/PageArticle";
import PageInterviewQuestions from "../pages/PageInterviewQuestions";

const ROUTES: Route[] = [
    {
        id: 1,
        path: '/',
        component: PageMain,
        withLayout: true
    },
    {
        id: 2,
        path: '/article',
        component: PageArticle,
        withLayout: true
    },
    {
        id: 3,
        path: '/interview-questions',
        component: PageInterviewQuestions,
        withLayout: true
    },
];

export { ROUTES };
