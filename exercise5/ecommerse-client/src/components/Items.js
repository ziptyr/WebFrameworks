import React from 'react';
import AdminItems from './AdminItems';
import {useData} from './DataProvider';
import Item from './Item';
import AdminView from './AdminView';


export default function Items() {
  /* maps data into items*/

  const {data, adminMode} = useData();

  let adminView = (adminMode) ? <AdminView /> : '';
  let user = data.map(item => <Item key={item.id} item={item} />)

  let output = <>
    {adminView}
    <br />
    <div className='itemContainer'>
        {(adminMode) ? <AdminItems /> : user}
    </div>
    </>
  ;

  return (
    output
  )
}
