  import App from "../App";
  import Test from './Test'

  const SidebarItems = [
      {
        title: 'Home',
        path: '/',
        icon: 'bx-home-alt',
        component: <App />,
      },
      {
        title: 'Test',
        path: '/test',
        icon: 'bx-home-alt',
        component: <Test />,
      },
      {
        title: 'Parent Item', // Main menu item with submenus
        icon: 'bx-home-alt',
        subNavOpen: false,
        subNav: [
          {
            title: 'Submenu 1',
            path: '/submenu1',
            icon: 'bx-home-alt',
            component: <App />,
          },
          {
            title: 'Submenu 2',
            path: '/submenu2',
            icon: 'bx-home-alt',
            component: <Test />,
          },
        ],
      },
      // Other menu items...
    ];
    
    export default SidebarItems;
