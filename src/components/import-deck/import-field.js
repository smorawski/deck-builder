import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ImportField = ({ onAccept, value }) => {
  const inputRef = useRef(null);
  return (
    <div className="importField">
      <textarea ref={inputRef} defaultValue={value} />
      <button
        type="button"
        onClick={() => onAccept(inputRef.current.value)}
      >
        Import
      </button>
    </div>
  );
};

ImportField.propTypes = {
  value: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
};

ImportField.defaultProps = {
  value: '',
};

export default ImportField;
