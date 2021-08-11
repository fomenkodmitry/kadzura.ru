export type Route = {
    id: number;
    path: string;
    page: React.FC;
    withLayout: boolean;
};