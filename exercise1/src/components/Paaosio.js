import React from 'react'
import Artikkelit from './Artikkelit'
import style from './Paaosio.module.css'
import Sivupalkki from './Sivupalkki'

export default function Paaosio() {
  return (
    <div className={style.paaosio}>
      <div className={style.container}>
        <Artikkelit />
        <Sivupalkki />
      </div>
    </div>
  )
}
