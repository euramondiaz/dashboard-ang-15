import { InavbarData } from "./helper";

export const navbarData: InavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products'
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
          {
            routeLink: 'Coupens/list',
            label: 'List Coupens'
          },
          {
            routeLink: 'Coupens/create',
            label: 'Create Coupens'
          }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
];
