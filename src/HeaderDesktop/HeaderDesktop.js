import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '@ox2/button/Button';
import FontIcon from '@ox2/icon/FontIcon';
import Thumb from '../Thumb';

/**
 * HeaderDesktop Component
 */
const HeaderDesktop = props => {
  const {
    className: classNameProp,
    onSwitchClick,
    onUserClick,
    onHomeClick,
    image,
    title,
    showSwitchMenu,
  } = props;

  const className = classNames(
    'pos:absolute-0 display:flex padding-x:7',
    classNameProp,
  );

  return (
    <div className={className}>
      <div className="flex:2 display:flex flex:items-center flex:content-start">
        <Button
          onClick={onHomeClick}
          btn="large raised brand"
          className="margin-r:10"
        >
          <FontIcon group="linear" icon="cactus" />
        </Button>
        {showSwitchMenu &&
          <div className="display:flex flex:items-center">
            <Thumb image={image} width={35} height={35} />
            <div className="size:14 text-color:white font:roboto margin-l:10">
              {title}
            </div>
            <Button
              onClick={onSwitchClick}
              btn="tiny neutral-dark"
              className="margin-l:10"
            >
              Switch
            </Button>
          </div>}
      </div>
      <div className="flex:1 display:flex flex:items-center flex:content-end">
        <Button
          onClick={onUserClick}
          btn="transparent large white"
        >
          <FontIcon group="linear" icon="user" />
        </Button>
      </div>
    </div>
  );
};

HeaderDesktop.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onSwitchClick: PropTypes.func,
  onUserClick: PropTypes.func.isRequired,
  showSwitchMenu: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default HeaderDesktop;
