import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/Route';
// import Header from './component/header/Header';
import './index.css';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="flex flex-col w-full h-screen font-sohne-var">
      {/* Canvas Animation in the Background */}

      {/* Header Section */}

      {/* Main Content Area */}
      <Routes>
        {routes?.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
