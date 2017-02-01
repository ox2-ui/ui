import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '@ox2/icon/Icon';

/**
 * HeaderBar Component
 */
const HeaderBar = (props) => {
  const { className: classNameProp, icon, image, title, onIconClick, widget, widgetBottom } = props;

  const className = classNames(
    'display:flex flex:column flex:0-auto color:white border-color:brand border:bottom border:2',
    classNameProp
  );

  return (
    <div className={className}>
      <div className="display:flex flex:items-center flex:44px padding-x:7">
        {/* Picture */}
        {do {
          if (icon) {
            <Icon
              size={'25px'}
              onClick={onIconClick}
              icon={icon}
              className="text-color:brand"
            />;
          } else if (image) {
            <img
              src={image}
              width="30"
              height="30"
              className="border:rounded"
              role="presentation"
            />;
          }
        }}
        {/* Title */}
        <div className="w:100p font:roboto-condensed text-color:neutral-dark size:14 text:left text:truncate text:uppercase padding-x:7">{title}</div>
        {widget && widget(props)}
      </div>
      {widgetBottom && widgetBottom(props)}
    </div>
  );
};

HeaderBar.propTypes = {
  button2Handler: PropTypes.func,
  button2Label: PropTypes.string,
  buttonHandler: PropTypes.func,
  buttonLabel: PropTypes.string,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  onIconClick: PropTypes.func,
  title: PropTypes.string,
  widget: PropTypes.func,
  widgetBottom: PropTypes.func,
};

export default HeaderBar;
