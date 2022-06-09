import React, { useState } from 'react';

function UserFormFC(props) {

    const [formState,inputChangeHandler] = useState({firstname:'',lastname:''});

    return (
        <div>
            <form>
                <input name='firstname' value={formState.firstname} onChange={e => inputChangeHandler({...formState,firstname: e.target.value})} />
                <input name='lastname' value={formState.lastname} onChange={e => inputChangeHandler({...formState,lastname: e.target.value})} />
            </form>
        </div>
    );
}

export default UserFormFC;