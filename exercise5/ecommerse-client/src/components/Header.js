import React, {useState} from 'react'
import {useData} from './DataProvider';
//import AdminView from './AdminView';


export default function Header() {
    /* header portion of page and search function*/

    const {filter, adminMode, setAdminMode} = useData();
    const [input, setInput] = useState('');

    let adminButton = (adminMode) ?
        <button className='adminButton' onClick={() => setAdminMode(false)}
            >User
        </button> :
        <button className='adminButton' onClick={() => setAdminMode(true)}>
            Admin
        </button>;

    //let adminView = (adminMode) ? <AdminView /> : '';

    let output = 
        <header>
            <div className='search'>
                <div>
                <input
                    value={input}
                    type='text'
                    onChange={(e) => {
                        setInput(e.target.value);
                        filter(e.target.value)}
                    }
                />
                </div>
                <div>
                    {adminButton}
                </div>
            </div>
        </header>;
    

    return (
        output
    )
}
