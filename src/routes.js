import React from 'react';
import Home from './components/Home';
import Create from './components/Create';
import NotFound from './components/NotFound';

const routes = [
    {
        label: 'Home',
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        label: 'Create Blogs',
        path: '/create',
        exact: false,
        main: ({history}) => <Create history={history}/>
    },
    {
        label: '',
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;