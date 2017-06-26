import PropTypes from 'prop-types';
import React from 'react';
import Button from '@ox2/button/Button';

const styles = {
  button: {
    flex: '0 0 auto',
  },
};

/**
 * HeaderButton Component
 */
const HeaderButton = ({
  style,
  onClick,
  label,
  className,
}) => {
  const mergedStyles = {
    ...styles.button,
    ...style,
  };

  return (
    <Button
      btn="header-button small raised"
      className={className}
      onClick={onClick}
      style={mergedStyles}
    >
      {label}
    </Button>
  );
};

HeaderButton.defaultProps = {
  className: '',
  style: {},
};

HeaderButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default HeaderButton;
