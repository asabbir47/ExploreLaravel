import React, { Component } from 'react';

class RenderProps extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        console.log(props);
    }

    eventHandler = () => {
        this.setState((prevState)=>({
            count: prevState.count+1
        }));
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.eventHandler)}
            </div>
        );
    }
}

export default RenderProps;