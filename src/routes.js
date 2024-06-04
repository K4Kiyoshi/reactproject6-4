import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const First = React.lazy(() => import('./views/firstpage/First'));
const Result = React.lazy(() => import('./views/firstpage/Result'));
const Test = React.lazy(() => import('./views/firstpage/Test'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/first`, name: 'First', component: First},
  { path: `/result`, name: 'Result', component: Result},
  { path: `/test`, name: 'Test', component: Test},
];

export default routes;



