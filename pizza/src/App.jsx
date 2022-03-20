import React, { useEffect } from 'react';
import { MainPageHeader } from './components';
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import getMenu from './requests/getMenu';
import { useDispatch } from 'react-redux';
import setPizzasAction from './redux/actions/pizzasActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMenu().then((data) => {
      dispatch(setPizzasAction(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <MainPageHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
