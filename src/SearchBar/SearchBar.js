import PropTypes from 'prop-types';
import React from 'react';
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
const SearchBar = ({
  className,
  style,
  onChange,
  placeholder,
  value,
  ...other
}) => {
  return (
    <StyledSearchInput
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      throttle={100}
      value={value}
      {...other}
    />
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

export default SearchBar;
