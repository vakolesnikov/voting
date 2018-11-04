import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ControlPanel = ({ isDisabled, onClick, step }) => (
    <div className='d-flex justify-content-between align-items-center control-panel'>
        <Button label='Начать голосование' onClick={ onClick } isDisabled={ isDisabled }/>
        <div>
            До конца голосования осталось { 9 - step } сек.
        </div>
    </div>
);

ControlPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    step: PropTypes.number.isRequired,
};

export default ControlPanel;
