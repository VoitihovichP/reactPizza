import React, { useEffect, useState } from 'react';
import { MainPageHeader } from './components';
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import getMenu from './requests/getMenu';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getMenu().then((data) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <MainPageHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home menu={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
