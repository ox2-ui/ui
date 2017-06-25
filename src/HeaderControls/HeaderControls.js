import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * HeaderControls Component
 */
const HeaderControls = props => {
  const {
    className: classNameProp,
    style,
    children,
  } = props;

  const className = classNames(
    'padding-x:7 padding-b:7 border-color:brand border:bottom border:2',
    classNameProp,
  );

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

HeaderControls.propTypes = {
  children: PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default HeaderControls;
