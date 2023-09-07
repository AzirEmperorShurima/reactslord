import React from 'react';
import PropTypes from 'prop-types';
import CoderJob from './components/coderJob';

Todosomething.propTypes = {

};

function Todosomething(props) {
    const jobEveryday = [{
        id: 1,
        name: 'eat'
    }, {
        id: 2,
        name: 'sleep'
    }, {
        id: 3,
        name: 'di ia'
    }
    ];
    return (
        <div>
            <h3>cong viec cua coder moi ngay</h3>
            <CoderJob coder={jobEveryday}/>
        </div>
    );
}

export default Todosomething;