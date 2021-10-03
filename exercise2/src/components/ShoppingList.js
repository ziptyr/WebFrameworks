import React from 'react'
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map(i => <ShoppingListItem {...i} key={ i.id }/>)}
    </ul>
  )
}
