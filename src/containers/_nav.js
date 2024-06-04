export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'First',
    to: '/first',
    icon: 'cil-laptop',
},
{
  _tag: 'CSidebarNavItem',
  name: 'Test',
  to: '/test',
  icon: 'cil-code',
},
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },
  {
        icon: 'cil-home',
        _tag: 'CSidebarNavItem',
        name: 'Logout',
        to: '/ReactLogout',
  }
  
]


