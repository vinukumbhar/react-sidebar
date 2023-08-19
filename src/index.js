import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import list from './components/list';

const Routed = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
      <BrowserRouter>
        <div className='row'>
          <div className='col-2'>
            <Sidebar state={{sidebarOpen, setSidebarOpen}}/>
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
