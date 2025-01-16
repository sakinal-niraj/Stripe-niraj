import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes/Route';
import Header from './component/header/Header';
import './index.css';
import Footer from './component/footer/Footer';
import Dummy from './constant/Dummy';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/'; 
  return (
    <div className="flex flex-col w-full h-screen font-sohne-var">
      {/* Canvas Animation in the Background */}
      {showHeader && <Header />}  

      {/* Header Section */}

      {/* Main Content Area */}
      <Routes>
        {routes?.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
        <Route path='none' element={<Dummy />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
