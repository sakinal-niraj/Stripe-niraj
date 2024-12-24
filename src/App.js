import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/Route';
import Header from './component/header/Header';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex-grow">
        {/* Your Routes Component here */}
        <Routes>
          {routes.map((item, index) => (
            <Route path={item.path} element={item.element} key={index} />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App
