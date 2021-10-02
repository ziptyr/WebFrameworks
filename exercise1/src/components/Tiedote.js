import React from 'react'
import style from './Tiedotteet.module.css'

export default function Tiedote(props) {
    return (
        <div className={style.tiedoteContainer}>
            <p><span className="bold">{props.otsikko}:</span> {props.teksti}</p>
        </div>
    )
}
