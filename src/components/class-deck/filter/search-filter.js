import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  setSearchFilter as setSearchFilterAction,
  clearSearchFilter as clearSearchFilterAction,
} from '../../../state/filter/actions';
import { filterSearchSelector } from '../../../state/filter/selectors';

const SearchFilter = ({ search, setSearchFilter, clearSearchFilter }) => {
  const changeSearchForm = (event) => {
    event.preventDefault();
    setSearchFilter(event.target.value);
  };
  return (
    <div role="group" className="mr-2 filter searchFilter">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">
            <span role="img" aria-label="search">&#128269;</span>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl onChange={changeSearchForm} value={search} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        <InputGroup.Append>
          <Button variant="danger" onClick={clearSearchFilter}>X</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

SearchFilter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  clearSearchFilter: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    search: filterSearchSelector(state),
  }),
  { setSearchFilter: setSearchFilterAction, clearSearchFilter: clearSearchFilterAction },
)(SearchFilter);
