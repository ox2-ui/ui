import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  position: absolute;
  left: 0;
  top: calc(50% - 17.5px);
  width: 5px;
  height: 35px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

/**
 * SelectIndicator Component
 */
const SelectIndicator = (props) => {
  const { className, style } = props;

  return (
    <Indicator style={style} className={className} />
  );
};

SelectIndicator.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default SelectIndicator;
