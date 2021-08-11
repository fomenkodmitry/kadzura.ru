
type NavigationLayout = {
    link: string,
    nameFull: string
    nameSmall: string
}

const navigationLayout: NavigationLayout[] = [
    {
        link: '/',
        nameFull: 'Главная',
        nameSmall: 'Главная'
    },
    {
        link: '/article',
        nameFull: 'Статьи',
        nameSmall: 'Статьи',
    },
    {
        link: '/interview-questions',
        nameFull: 'Вопросы на собеседования',
        nameSmall: 'Собес.',
    }
];

export { navigationLayout };
