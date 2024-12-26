import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/Route';
import Header from './component/header/Header';
import './index.css';
import CanvasAnimation from './view/home/CanvasAnimation';

function App() {
  return (
    <div className="flex flex-col w-full h-screen relative">
      {/* Canvas Animation in the Background */}

      <Header />
      {/* Header Section */}
      <CanvasAnimation />

      {/* Main Content Area */}
      <div className="flex-grow overflow-auto z-10 relative">
        <Routes>
          {routes.map((item, index) => (
            <Route path={item.path} element={item.element} key={index} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
