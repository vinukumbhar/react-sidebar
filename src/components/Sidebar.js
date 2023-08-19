import React, {useState} from 'react';
import '../styles/Sidebar.css';
import logo from './logo.png';
import si from './list';

const Sidebar = ({state}) => {
  
  const {sidebarOpen, setSidebarOpen} = state;
  const [SidebarItems, setSidebarItems] = useState(si);
  let dark = window.localStorage.getItem('dark');

  const execDark = () => {
    if(dark==='true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  execDark();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    window.localStorage.setItem('dark', dark==='true'?'false':'true');
    dark = window.localStorage.getItem('dark');
    execDark();
  };
  const toggleSubmenu = (index) => {
    const updatedSidebarItems = [...SidebarItems];
    updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
    setSidebarItems(updatedSidebarItems);
  };


  return (
    <nav className={`sidebar ${sidebarOpen ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="" />
          </span>

          <div className="text logo-text">
            <span className="name">Codinglab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>

      
    <div className="menu-bar">
      <div className="menu">
        <ul className="menu-links">
        {SidebarItems.map((item, index) => (
  <li className="nav-link" key={index}>
    <a href={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
      <i className={'bx icon ' + item.icon}></i>
      <span className="text nav-text">{item.title}</span>
      {item.subNav && (
                <i className={`bx ${item.subNavOpen ? 'bx-chevron-down' : 'bx-chevron-right'} caret-icon`}></i>
            )}
    </a>
    {item.subNav && item.subNavOpen && (
      <ul className='submenu d-block'>
        {item.subNav.map((subItem, subIndex) => (
          <li className="subnav-link" key={subIndex}>
            <a href={subItem.path}>
              <i className={'bx icon ' + subItem.icon}></i>
              <span className="text nav-text">{subItem.title}</span>
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
))}

        </ul>
      </div>

        <div className="bottom-content">
          <li>
            <a href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode">
            <div className="sun-moon">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch" onClick={toggleDarkMode}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
