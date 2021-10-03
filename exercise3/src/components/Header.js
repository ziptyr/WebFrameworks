import React, {useState} from 'react'
import {useData} from './DataProvider';


export default function Header() {
  /* header portion of page and search function*/

  const {filter} = useData();
  const [input, setInput] = useState('');

  let output = 
    <header>
      <div className='search'>
        <input
          value={input}
          type='text'
          onChange={(e) => {
            setInput(e.target.value);
            filter(e.target.value)}
          }
        />
      </div>
    </header>;
  

  return (
    output
  )
}
