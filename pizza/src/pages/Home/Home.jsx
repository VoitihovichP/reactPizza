import React from 'react';
import { CategoriesBtn, PizzaBlock, SortSelect } from '../../components';
import { categoriesItems, sortSelectItems } from '../../constants/arrays';

const Home = ({ menu }) => {
  return (
    <div className="container">
      <div className="content__top">
        <CategoriesBtn items={categoriesItems} />
        <SortSelect items={sortSelectItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {menu.map((item) => (
          <PizzaBlock pizzaData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
