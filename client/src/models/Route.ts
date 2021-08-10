export type Route = {
    id: number;
    path: string;
    component: React.FC;
    withLayout: boolean;
};