import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import FontIcon from '@ox2/icon/FontIcon';

/**
 * HeaderBar Component
 */
const HeaderBar = props => {
  const {
    className: classNameProp,
    icon,
    image,
    title,
    onIconClick,
    children,
    hideBorder,
  } = props;

  const className = classNames(
    'display:flex flex:column flex:0-auto color:white',
    {
      'border-color:brand border:bottom border:2': !hideBorder,
    },
    classNameProp,
  );

  return (
    <div className={className}>
      <div className="display:flex flex:items-center flex:44px padding-x:7">
        {/* Picture */}
        {
          do {
            if (icon) {
              <FontIcon
                className="text-color:brand"
                group="module"
                icon={icon}
                onClick={onIconClick}
                size="25px"
              />;
            } else if (image) {
              <img
                className="border:rounded"
                height="30"
                role="presentation"
                src={image}
                width="30"
              />;
            }
          }
        }
        {/* Title */}
        <div className="w:100p font:roboto-condensed text-color:neutral-dark size:14 text:left text:truncate text:uppercase padding-x:7">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};

HeaderBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideBorder: PropTypes.bool,
  icon: PropTypes.string,
  image: PropTypes.string,
  onIconClick: PropTypes.func,
  title: PropTypes.string,
};

export default HeaderBar;
