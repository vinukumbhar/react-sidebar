import {React, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import list from './components/list';
import MobileSidebar from './components/MobileSidebar';

const Routed = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const width = useRef(window.innerWidth);
  return (
      <BrowserRouter>
        <div className='row'>
          <div className='col-2'>
            {
              width.current > 700 ? (
                <Sidebar state={{sidebarOpen, setSidebarOpen}}/>
              ) : (
                <MobileSidebar/>
              )
            }
          </div>
          <div className='col-9'>
            <Routes>
              {
                list.map((x, i) => {
                  return (
                    <>
                      <Route key={i} path={x.path} element={x.component}/>
                      {
                        x.subNav ?
                          x.subNav.map((y, j) => {
                            return <Route key={j} path={y.path} element={y.component}/>
                          })
                        : null
                      }
                    </>
                  )
                })
              }
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Routed/>
  </>
);
