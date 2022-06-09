import React from 'react';

function ClickCounter(props) {
    return (
        <div>
            <button onClick={props.eventHandler}>Clicked {props.count} times</button>
        </div>
    );
}

export default ClickCounter;