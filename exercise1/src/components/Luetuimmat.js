import React from 'react'
import style from './Paaosio.module.css'
import SivupalkkiUutinen from './SivupalkkiUutinen.js'

export default function Luetuimmat(props) {
  return (
    <div className={style.sidebar}>
      <h2>Luetuimmat</h2>
      <hr />
      {props.luetuimmat.map((elementti, i) => {
        return (
          <SivupalkkiUutinen
            key={i}
            aihe={elementti.aihe}
            otsikko={elementti.otsikko}
            avain={i}
          />
        )
      })}
      <div className={style.sidebarNaytaLisaa}>
        <div>
          <span className={style.naytaLisaa}>Näytä lisää</span>
        </div>
      </div>
    </div>
  )
}
