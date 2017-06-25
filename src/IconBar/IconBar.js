import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Thumb from '../Thumb';
import SelectIndicator from '../SelectIndicator';
import Scroller from '@ox2/scroller/Scroller';
import styled from 'styled-components';
import Immutable from 'immutable';

const Item = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledScroller = styled(Scroller)`
  padding-top: 14px;
  padding-bottom: 14px;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
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
    } else if (
      !Immutable.is(this.props.items, nextProps.items)
    ) {
      return true;
    } else {
      return false;
    }
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
        {items.map((item, i) => {
          return (
            <Item
              key={i}
              onClick={() => onUpdate(item._id)}
            >
              {value === item._id &&
                <SelectIndicator className="color:neutral-faded" />}
              <Thumb
                image={item.logo}
                width={35}
                height={35}
              />
            </Item>
          );
        })}
      </StyledScroller>
    );
  }
}

export default IconBar;
