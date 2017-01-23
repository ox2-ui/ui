import React, { Component, PropTypes } from 'react';
import Thumb from '../Thumb';
import SelectIndicator from '../SelectIndicator';
import Scroller from '@ox2/scroller/Scroller';
import styled from 'styled-components';

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
    items: PropTypes.array.isRequired,
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

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleClick = (value) => {
    this.props.onUpdate(value);
    this.setState({
      value: value,
    });
  };

  render() {
    const { className, style, items } = this.props;

    return (
      <StyledScroller className={className} style={style}>
        {items.map((item, i) => {
          return (
            <Item
              key={i}
              onClick={() => this.handleClick(item.value)}
            >
              {this.state.value === item.value &&
                <SelectIndicator className="color:neutral-faded" />
              }
              <Thumb
                image={item.image}
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
