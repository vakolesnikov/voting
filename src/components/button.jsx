import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, isDisabled, onClick}) => (
    <button
        type="button"
        className="btn btn-secondary btn-lg bg-dark"
        onClick={ onClick }
        disabled={ isDisabled }
    >
        { label }
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    isDisabled: false,
};

export default Button;
