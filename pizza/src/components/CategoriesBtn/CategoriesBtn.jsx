import React, { memo, useState } from 'react';

const CategoriesBtn = memo(({ items, onSelect }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onSelect(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default CategoriesBtn;
