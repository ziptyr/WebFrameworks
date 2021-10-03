import React, {useState} from 'react';
import {useData} from './DataProvider';


export default function AdminView() {
  const {addNewItem} = useData();

  const emptyItem = {
      'id': '',
      'title': '',
      'manufacturer': '',
      'rating': '',
      'ratings': '',
      'price': '',
  }
  const [newItem, setNewItem] = useState(emptyItem);

  return (
    <div className='addProduct'>
      <div className='inputProduct'>
        Title:
        <input
          value={newItem.title}
          type='text'
          onChange={(e) => {
            let item = {...newItem};
            item.title = e.target.value;
            setNewItem(item);
          }}
        />
      </div>

      <div className='inputProduct'>
        Manufacturer:
        <input
          value={newItem.manufacturer}
          type='text'
          onChange={(e) => {
            let item = {...newItem};
            item.manufacturer = e.target.value;
            setNewItem(item);
          }}
        />
      </div>

      <div className='inputProduct'>
        Rating:
        <input
          value={newItem.rating}
          type='text'
          onChange={(e) => {
            if (e.target.value > 5) {
              e.target.value = 5;
            } else if (e.target.value < 0) {
              e.target.value = 0;
            }
            let item = {...newItem};
            item.rating = e.target.value;
            setNewItem(item);
          }}
      />
      </div>

      <div className='inputProduct'>
        Ratings:
      <input
        value={newItem.ratings}
        type='text'
        onChange={(e) => {
          let item = {...newItem};
          item.ratings = e.target.value;
          setNewItem(item);
          }}
        />
      </div>

      <div className='inputProduct'>
        Price:
        <input
          value={newItem.price}
          type='text'
          onChange={(e) => {
            let item = {...newItem};
            item.price = e.target.value;
            setNewItem(item);
          }}
        />
      </div>

      <div>
        <button onClick={() => {
          addNewItem(newItem);
          setNewItem(emptyItem);
        }}>
        Add Item
      </button>
      </div>
    </div>
  )
}
