import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 15px;
`;

const Label = styled.div`
  font-size: 15px;
  font-family: Roboto Condensed, sans-serif;
  color: #aaa;
  padding-bottom: 5px;
`;

/**
 * SelectFieldLabel Component
 */
const SelectFieldLabel = ({ children, text }) => (
  <Wrapper>
    <Label>{text}</Label>
    {children}
  </Wrapper>
);


SelectFieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default SelectFieldLabel;
