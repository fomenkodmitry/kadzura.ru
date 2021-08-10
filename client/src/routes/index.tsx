import {Route} from "../models/Route";
import PageMain from "../pages/PageMain";
import PageTest from "../pages/PageTest";

const ROUTES: Route[] = [
    {
        id: 1,
        path: '/',
        component: PageMain,
        withLayout: true
    },
    {
        id: 2,
        path: '/test',
        component: PageTest,
        withLayout: true
    },
];

export { ROUTES };
