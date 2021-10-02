import React from 'react'
import style from './Paaosio.module.css'

      //<div className={style.pikkuKuva}></div>
export default function PikkuArtikkeli(props) {
  return (
    <div className={style.pikkuartikkeli}>
      <div className={style.pikkuOtsikko}>
          <h3>
            <span className={style.artikkeliAihe}>{props.aihe} | </span>
              {props.otsikko}</h3></div>
            <img className={style.pikkuKuva} src={'/images/' + props.id + '.png'} />
    </div>
  )
}
