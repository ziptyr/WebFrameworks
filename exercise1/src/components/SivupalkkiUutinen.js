import React from 'react'
import style from './Paaosio.module.css'

export default function SivupalkkiUutinen(props) {
    return (
        <div className={style.sidebarItem}>
            <div className={style.sidebarNro}>{props.avain + 1}</div>
            <div className={style.sidebarUutinen}>
                <span style={{fontWeight: "bold"}}>{props.aihe} |</span> {props.otsikko}
            </div>
        </div>
    )
}
