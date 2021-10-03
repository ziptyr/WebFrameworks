import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';


export default function Item({item}) {
  /* individual item*/

  const createArray = (length) => {
      /* returns an empty array of given length*/

      return [...Array(length)]
  }

  const Star = (props) => {
      /* returns a star / half star / empty star
        *
        * 0...5 rating with 0.5 points == 0...10 rating
        * values multiplied with 2, if rating is one point off from a
        * next star return half star
        */

      let starsRating = Math.round(item.rating * 2);
      let index = (props.index + 1) * 2;

      if (starsRating >= index) {
          return <FaStar color='orange' />
      } else if (starsRating === index - 1) {
          return <FaStarHalfAlt color='orange' />
      } else {
          return <FaRegStar color='orange' />
      }
  }

  const getDecimal = (num, decimals) => {
      /* return decimal portion as a string from a given number
      
        * substring() removes the leading zero and decimal marking
        */

      return (num % 1).toFixed(decimals).substring(2)
  }

  return (
    <div className='item'>
      <div>
        <img alt={item.title + '.jpeg'} src={'./images/' + item.id + '.jpeg'} />
      </div>
      <div className='title'>
        {item.title}
      </div>
      <div className='manufacturer'>
        by {item.manufacturer}
      </div>
      <div className='rating'>
        <div>
          {createArray(5).map((n, i) => (<Star key={i} index={i} />))}
        </div>
        <div className='ratings'>
          {item.ratings.toLocaleString()}
        </div>
      </div>
      <div className='price'>
        <span className='unit'>$</span>
        {Math.floor(item.price)}
        <span className='unit'>{getDecimal(item.price, 2)}</span>
      </div>
    </div>
  )
}
