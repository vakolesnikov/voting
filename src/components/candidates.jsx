 import React from 'react';
import PropTypes from 'prop-types';

import Candidate from './candidateItem';

const Candidates = ({ candidates, countVote }) => {
    const candidatesListHtml = candidates.map((item, index) => (
        <Candidate
            key={`${item.name}${index}`}
            countVote={ countVote }
            index={ index }
            item={ item }
        />
    ));

    return (
        <tbody className='table-striped'>
            { candidatesListHtml }
        </tbody>
    )
};

Candidates.propTypes = {
    candidates: PropTypes.array.isRequired,
    countVote: PropTypes.number.isRequired,
};

export default Candidates;
