import React from 'react';
import {useData} from './DataProvider';
import Item from './Item';


export default function Items() {
    /* maps data into items*/

    const {data} = useData();

    let user = data.map(item => <Item key={item.id} item={item} />)

    let output = <div className="itemContainer">
            {user}
        </div>;

    return (
        output
    )
}
