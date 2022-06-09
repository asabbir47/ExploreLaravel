import React, { Component } from 'react';

class ClickCounter1 extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.eventHandler}>Clicked {this.props.count} times</button>
            </div>
        );
    }
}

export default ClickCounter1;
        