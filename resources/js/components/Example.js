import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './ClickCounter';
import ClickCounter1 from './ClickCounter1';
import RenderProps from './RenderProps';
import UserForm from './UserForm';
import UserFormFC from './UserFormFC';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            {/* <RenderProps efrgthy='qwegr'/> */}
                            <RenderProps render={(count,eventHandler)=>(
                                <ClickCounter count={count} eventHandler={eventHandler}/>
                            )}/>
                            <UserFormFC/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
