import React, { PropTypes } from 'react';
import SearchInput from 'react-search-input';
import styled from 'styled-components';

const StyledSearchInput = styled(SearchInput)`
  input {
    width: 100%;
    font-size: 15px;
    border: 1px solid #c6c6c6;
    border-radius: 3px;
    line-height: 22px;
    padding-left: 9px;
    padding-right: 9px;
    height: 32px;
    -webkit-appearance: none;
    font-family: Roboto Condensed
  }

  input:focus {
    outline: none;
  }
`;

/**
 * SearchBar Component
 */
const SearchBar = ({ className, style, onChange, placeholder }) => {
  return (
    <StyledSearchInput
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      throttle={100}
    />
  );
};

SearchBar.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default SearchBar;
