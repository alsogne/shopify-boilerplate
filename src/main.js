import React from 'react';
import { createRoot } from 'react-dom/client';

import { PrimaryButton } from './components/Button';

const handlePrimaryClick = () => {
  alert('Primary button clicked!');
};

const root = createRoot(document.body);
root.render(<PrimaryButton label="Click here" className={'btn-primary'} onClick={handlePrimaryClick} />);
