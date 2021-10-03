import React from 'react'
import {useData} from './DataProvider';


export default function AdminItems() {
  const {data, removeItem} = useData();

  return (
    <div>
      <table style={{width: '1000px', border: '1px solid black'}}>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Manufacturer</th>
            <th>Rating</th>
            <th>Ratings</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {data.map(item => {
            return <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.manufacturer}</td>
              <td>{item.rating}</td>
              <td>{item.ratings}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>
                  X
                </button>
              </td>
            </tr>
          })}
      </tbody>
    </table>
  </div>
  )
}
