import React, { useState } from 'react';

const CategoriesBtn = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => setActiveItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoriesBtn;
