import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBtn, PizzaBlock, SortSelect } from '../../components';
import { categoriesItems, sortSelectItems } from '../../constants/arrays';
import { setCategory } from '../../redux/actions/filltersActions';

const Home = () => {
  const dispatch = useDispatch();
  const { pizzaItems } = useSelector(({ pizzas }) => ({
    pizzaItems: pizzas.items,
  }));

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <CategoriesBtn items={categoriesItems} onSelect={onSelectCategory} />
        <SortSelect items={sortSelectItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaItems.map((item) => (
          <PizzaBlock pizzaData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
