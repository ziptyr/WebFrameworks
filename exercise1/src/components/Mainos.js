import React from 'react'
import style from './Tiedotteet.module.css'

export default function Mainos(props) {
    return (
        <div className={style.mainosContainer}>
            <p><span className="bold">MAINOS:</span> {props.mainos}</p>
        </div>
    )
}
