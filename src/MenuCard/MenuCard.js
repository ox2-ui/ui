import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import MenuItem from '../MenuItem';
import Thumb from '../Thumb';
import Button from '@ox2/button/Button';

const styles = {
  wrapper: {
    borderRadius: '12px',
  },
};

/**
 * MenuCard Component
 */
const MenuCard = props => {
  const {
    className: classNameProp,
    image,
    imageLandscape,
    items,
    moduleId,
    onItemClick,
    onSwitchClick,
    selectedValue,
    style,
    switchEnabled,
    title,
  } = props;
  const className = classNames(
    'font:roboto-condensed border:all border-color:neutral-faded',
    classNameProp,
  );

  const mergedStyles = {
    ...styles.wrapper,
    ...style,
  };

  const LANDSCAPE_HEIGHT = 35;
  const PORTRAIT_HEIGHT = 70;

  return (
    <div className={className} style={mergedStyles}>
      <div className="padding-y:5 padding-x:10 size:20 text-color:neutral-dim text:truncate border:bottom border-color:neutral-faded">
        {title}
      </div>
      <div
        className="padding:5 overflow:hidden display:flex flex:items-center"
        style={styles.wrapper}
      >
        <div>
          {items.map(item => {
            return (
              <MenuItem
                icon={item.icon}
                iconColor={'brand'}
                iconGroup={item.iconGroup}
                key={item._id}
                module={item.module}
                moduleGroup={item.moduleGroup}
                moduleId={moduleId}
                onClick={onItemClick}
                pictureBgColor={'white'}
                textColor={
                  selectedValue === item.value
                    ? 'brand'
                    : 'backdrop-alt'
                }
                title={item.title}
                value={item.value}
              />
            );
          })}
        </div>
        {switchEnabled &&
          <div
            className="display:flex flex:column flex:items-center border:all border-color:neutral-faded margin:0-auto padding:10"
            style={styles.wrapper}
          >
            <Thumb
              className="padding-x:10 padding-b:10"
              color={'white'}
              height={
                imageLandscape
                  ? LANDSCAPE_HEIGHT
                  : PORTRAIT_HEIGHT
              }
              image={image}
              width={70}
            />
            <div>
              <Button
                btn="neutral outline small raised"
                onClick={onSwitchClick}
              >
                Switch
              </Button>
            </div>
          </div>}
      </div>
    </div>
  );
};

MenuCard.defaultProps = {
  className: '',
  image: '',
  imageLandscape: false,
  moduleId: '',
  onSwitchClick: () => null,
  selectedValue: '',
  style: {},
  switchEnabled: false,
};

MenuCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  imageLandscape: PropTypes.bool,
  items: PropTypes.array.isRequired,
  moduleId: PropTypes.string,
  onItemClick: PropTypes.func.isRequired,
  onSwitchClick: PropTypes.func,
  selectedValue: PropTypes.string,
  style: PropTypes.object,
  switchEnabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default MenuCard;
