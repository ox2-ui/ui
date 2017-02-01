import React, { PropTypes } from 'react';
import Button from '@ox2/button/Button';

const styles = {
  button: {
    flex: '0 0 auto',
  },
};

/**
 * HeaderButton Component
 */
const HeaderButton = ({ style, onClick, label, className }) => {
  const mergedStyles = {
    ...styles.button,
    ...style,
  };

  return (
    <Button
      btn="header-button small raised"
      onClick={onClick}
      className={className}
      style={mergedStyles}
    >{label}</Button>
  );
};

HeaderButton.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default HeaderButton;
