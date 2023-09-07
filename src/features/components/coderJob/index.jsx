import React from 'react';
import PropTypes from 'prop-types';

CoderJob.propTypes = {
    coder: PropTypes.array,
};
CoderJob.defaultProps = {
    coder: [],
}
function CoderJob({coder})  {
    return (
        <ul>         
            {coder.map(code =>
            (
                <li key={code.id}>{code.name}</li>
            ))}
        </ul>
    );
}

export default CoderJob;