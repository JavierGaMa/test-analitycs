export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        component: './Admin',
        authority: ['admin'],
        routes: [
          {
            path: '/admin/sub-page',
            name: 'sub-page',
            icon: 'smile',
            component: './Welcome',
            authority: ['admin'],
          },
        ],
      },
      {
        name: 'list.table-list',
        icon: 'table',
        path: '/list',
        component: './ListTableList',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/monitor',
        component: './monitor',
      },
      {
        name: 'search-list',
        icon: 'smile',
        path: '/search-list',
        component: './search-list',
      },
      {
        name: 'flow',
        icon: 'smile',
        path: '/flow',
        component: './flow',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
