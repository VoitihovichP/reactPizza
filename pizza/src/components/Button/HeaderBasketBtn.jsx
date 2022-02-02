import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button
      className={classNames('button', {
        'button--cart': props.outline,
      })}></button>
  );
};

export default Button;
