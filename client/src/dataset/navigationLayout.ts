
type NavigationLayout = {
    link: string,
    name: string
}

const navigationLayout: NavigationLayout[] = [
    {
        link: '/',
        name: 'Главная',
    },
    {
        link: '/article',
        name: 'Статьи',
    },
    {
        link: '/interview-questions',
        name: 'Вопросы на собеседования',
    }
];

export { navigationLayout };
