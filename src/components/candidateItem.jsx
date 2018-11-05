import React from 'react';
import PropTypes from 'prop-types';

const Candidate = ({item, index, countVote}) => (
    <tr className={ item.winner ? 'winner-item' : '' }>
        <td>{ index + 1 }</td>
        <td>
            <span>{ item.name }</span>

            {item.winner ? <span className='winner'> (Победитель)</span> : null}</td>
        <td>{item.value}</td>
        <td>{ item.value ? ((item.value/countVote) * 100).toFixed(1) : 0 }%</td>
    </tr>
);

Candidate.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    countVote: PropTypes.number.isRequired,
};

export default Candidate;
