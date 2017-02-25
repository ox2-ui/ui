import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 15px;
  padding-bottom: 5px;
`;

const Label = styled.div`
  font-size: 13.5px;
  font-family: Roboto, sans-serif;
  color: hsla(0, 0%, 35%, 1);
  padding-bottom: 5px;
`;

/**
 * WrapperLabel Component
 */
const WrapperLabel = ({ children, text }) => (
  <Wrapper>
    <Label>{text}</Label>
    {children}
  </Wrapper>
);


WrapperLabel.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default WrapperLabel;
