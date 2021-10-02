import React from 'react'
import style from './Paaosio.module.css'
import PikkuArtikkeli from './PikkuArtikkeli'
                //<div className={style.isoKuva}></div>
                //<div className={style.isoKuva}></div>

export default function Artikkeli(props) {
    if (props.otsikot.length > 1) {
        return (
            <div className={style.main}>
                <h1>{props.aihe}</h1>
                <img src={'/images/' + props.id + '.png'} className={style.isoKuva} />
                <h2><span className={style.artikkeliAihe}>{props.aihe} |</span> {props.otsikot[0]}</h2>
                {props.otsikot.map((otsikko, i) => <PikkuArtikkeli key={i} id={props.id + i + 1} aihe={props.aihe} otsikko={otsikko} />)}
            </div>
        )
    } else {
        return (
            <div className={style.main}>
                <img src={'/images/' + props.id + '.png'} className={style.isoKuva} />
                <h2><span className={style.artikkeliAihe}>{props.aihe} |</span> {props.otsikot}</h2>
            </div>
        )
    }
}
