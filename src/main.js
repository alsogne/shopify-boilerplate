import React from 'react';
import ReactDOM from 'react-dom';

import { PrimaryButton } from './components/Button';

const handlePrimaryClick = () => {
  alert('Primary button clicked!');
};

ReactDOM.render(
  <PrimaryButton label="Click here" className={'btn-primary'} onClick={handlePrimaryClick} />,
  document.body
);
