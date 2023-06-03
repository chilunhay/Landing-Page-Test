import React, { useEffect, useState } from 'react';
import './Button.css';

const Button = (props) => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  useEffect(() => {
    if (props.active) {
      setBtnState(true);
    }
  }, [props.active]);

  let toggleClassCheck = btnState ? ' btn-sm' : '';
  return (
    <button type="button" className={`btn${toggleClassCheck}`} onClick={handleClick}>
      {props.buttonName}
    </button>
  );
};

export default Button;
