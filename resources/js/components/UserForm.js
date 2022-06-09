import React, { Component } from 'react';

class UserForm extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
        }
    }

    inputChangeHandler = (e) => {
        console.log(e.target);
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input name='firstname' value={this.state.firstname} onChange={this.inputChangeHandler}/>
                    <input name='lastname' value={this.state.lastname} onChange={this.inputChangeHandler}/>
                </form>
            </div>
        );
    }
}

export default UserForm;   