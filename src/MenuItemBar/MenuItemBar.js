import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectIndicator from '../SelectIndicator';
import Scroller from '@ox2/scroller/Scroller';
import styled from 'styled-components';
import Immutable from 'immutable';
import MenuItem from '../MenuItem';

const StyledScroller = styled(Scroller)`
  padding-top: 14px;
  padding-bottom: 14px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

/**
 * MenuItemBar Component
 */

class MenuItemBar extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Menu items to render
     */
    items: PropTypes.instanceOf(Immutable.List).isRequired,
    /**
     * Callback function fired when the menu item is selected
     */
    onUpdate: PropTypes.func.isRequired,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Value to select
     */
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      return true;
    } else if (
      !Immutable.is(this.props.items, nextProps.items)
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      className,
      style,
      items,
      onUpdate,
      value,
    } = this.props;

    return (
      <StyledScroller className={className} style={style}>
        {items.map(item => {
          return (
            <div
              className="display:flex pos:relative padding-l:7"
              key={item._id}
            >
              {value === item._id &&
                <SelectIndicator className="color:neutral-dim" />}
              <MenuItem
                image={item.logo}
                onClick={onUpdate}
                pictureBgColor={'white'}
                pictureHeight={35}
                pictureWidth={35}
                title={item.title}
                value={item._id}
              />
            </div>
          );
        })}
      </StyledScroller>
    );
  }
}

export default MenuItemBar;
