import React from 'react';
import AdminItems from './AdminItems';
import {useData} from './DataProvider';
import Item from './Item';
import AdminView from './AdminView';


export default function Items() {
  /* maps data into items*/

  const {data, adminMode} = useData();
  const userItems = data.map(item => <Item key={item.id} item={item} />)

  return (
    <>
      {(adminMode) ? <AdminView /> : ''}
      <br />
      <div className='itemContainer'>
        {(adminMode) ? <AdminItems /> : userItems}
      </div>
    </>
  )
}
