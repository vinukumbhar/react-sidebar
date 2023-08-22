// import React, { useState } from 'react';
// import '../styles/Sidebar.css';
// import './MobileSidebar.css';
// import si from './list';

// const MobileSidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [SidebarItems, setSidebarItems] = useState(si);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };
//     const toggleSubmenu = (index) => {
//         const updatedSidebarItems = [...SidebarItems];
//         updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
//         setSidebarItems(updatedSidebarItems);
//       };

//     return (
//         <>
//         {
//             !isOpen ? <i className={`bx ${isOpen ? 'bx-chevron-left' : 'bx-menu'} toggle`} onClick={toggleSidebar}></i>
//             : (
//               <>
                
//                 <nav className={`sidebar ${isOpen ? 'open' : ''} mobile-sidebar`}>
//                 <div className='in'>
//                 <div className='header new'>
//                 <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
//                 </div>
//                 </div>
//                 <div className="menu-bar">
//                 <div className="menu">
//                   <ul className="menu-links">
//                   {SidebarItems.map((item, index) => (
//             <li className="nav-link" key={index}>
//               <a href={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
//                 <i className={'bx icon ' + item.icon}></i>
//                 <span className="text nav-text">{item.title}</span>
//                 {item.subNav && (
//                           <i className={`bx ${item.subNavOpen ? 'bx-chevron-down' : 'bx-chevron-right'} caret-icon`}></i>
//                       )}
//               </a>
//               {item.subNav && item.subNavOpen && (
//                 <ul className='submenu d-block'>
//                   {item.subNav.map((subItem, subIndex) => (
//                     <li className="subnav-link" key={subIndex}>
//                       <a href={subItem.path}>
//                         <i className={'bx icon ' + subItem.icon}></i>
//                         <span className="text nav-text">{subItem.title}</span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}

//                   </ul>
//                 </div>

//                 <div className="bottom-content">
//                   <li>
//                     <a href="#">
//                       <i className='bx bx-log-out icon'></i>
//                       <span className="text nav-text">Logout</span>
//                     </a>
//                   </li>
//                 </div>
//               </div>
//               </nav>
//               </>
//             )
//         }
        
//         </>
//     );
// };

// export default MobileSidebar;


import React, { useState } from 'react';
import '../styles/Sidebar.css';
import './MobileSidebar.css';
import si from './list';

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [SidebarItems, setSidebarItems] = useState(si);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleSubmenu = (index) => {
        const updatedSidebarItems = [...SidebarItems];
        updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
        setSidebarItems(updatedSidebarItems);
      };

    return (
        <>
        {
          <>
            <i className={`bx ${isOpen ? 'bx-chevron-left' : 'bx-menu'} toggle`} onClick={toggleSidebar}></i>
            <>
                
                <nav className={`sidebar ${isOpen ? 'open' : ''} mobile-sidebar`}>
                <div className='in'>
                <div className='header new'>
                <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
                </div>
                </div>
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
                </div>
              </div>
              </nav>
              </>
              </>

        }
        
        </>
    );
};

export default MobileSidebar;
