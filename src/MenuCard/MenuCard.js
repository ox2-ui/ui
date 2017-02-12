import React, { PropTypes } from 'react';
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
const MenuCard = (props) => {
  const { className: classNameProp, style, title, onItemClick, items, image, onSwitchClick, selectedValue, imageLandscape } = props;
  const className = classNames(
    'font:roboto-condensed border:all border-color:neutral-faded',
    classNameProp
  );

  const mergedStyles = {
    ...styles.wrapper,
    ...style,
  };

  return (
    <div className={className} style={mergedStyles}>
      <div className="padding-y:5 padding-x:10 size:20 text-color:neutral-dim text:truncate border:bottom border-color:neutral-faded">{title}</div>
      <div style={styles.wrapper} className="padding:5 overflow:hidden display:flex flex:items-center">
        <div>
          {items.map((item, i) => {
            return (
              <MenuItem
                key={i}
                onClick={onItemClick}
                title={item.title}
                icon={item.icon}
                iconColor={'brand'}
                textColor={selectedValue === item.value ? 'brand' : 'backdrop-alt'}
                pictureBgColor={'white'}
                value={item.value}
              />
            );
          })}
        </div>
        { onSwitchClick &&
          <div style={styles.wrapper} className="display:flex flex:column flex:items-center border:all border-color:neutral-faded margin:0-auto padding:10">
            <Thumb
              className="padding-x:10 padding-b:10"
              image={image}
              width={70}
              height={imageLandscape ? 35 : 70}
              color={'white'}
            />
            <div>
              <Button
                btn="neutral outline small raised"
                onClick={onSwitchClick}
              >Switch</Button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};


MenuCard.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  title: PropTypes.string.isRequired,
};

export default MenuCard;
