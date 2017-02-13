import React, { Component, PropTypes } from 'react';
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
 * IconBar Component
 */

class IconBar extends Component {
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

  shouldComponentUpdate(nextProps) {
    if (this.props.items !== nextProps.value) {
      return true;
    } else if (!Immutable.is(this.props.items, nextProps.items)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { className, style, items, onUpdate, value } = this.props;

    return (
      <StyledScroller className={className} style={style}>
        {items.map((item, i) => {
          return (
            <div key={i} className="display:flex pos:relative padding-l:7">
              {value === item._id &&
                <SelectIndicator className="color:neutral-dim" />
              }
              <MenuItem
                value={item._id}
                title={item.title}
                image={item.logo}
                pictureWidth={35}
                pictureHeight={35}
                pictureBgColor={'white'}
                onClick={onUpdate}
              />
            </div>
          );
        })}
      </StyledScroller>
    );
  }
}

export default IconBar;
