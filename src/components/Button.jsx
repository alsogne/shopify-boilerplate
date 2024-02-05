import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string, // Propriété optionnelle pour la classe CSS
};

export { Button as PrimaryButton, Button as SecondaryButton };
