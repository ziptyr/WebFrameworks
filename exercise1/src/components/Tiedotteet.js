import React from 'react'
import Mainos from './Mainos'
import Tiedote from './Tiedote'
import style from './Tiedotteet.module.css'

export default function Tiedotteet() {
    const tiedotteet = [{
        otsikko: 'KORONAVIRUS',
        teksti: 'Mitä tapahtuu maski- ja etätyösuositukselle? HS kokose uuden koronastrategian muutokset ja auki olevat asiat'},
        {otsikko: 'PÄIVÄN TIMANTTI',
        teksti: 'Opettaja kuvaili hukkuvansa oppilaansa katseeseen ja kutsui tätä "henkilökohtaiseksi huumeekseen"'}
    ]

    const mainokset = [
        'Faktoille on nyt suurempi tarve kuin kosakaan - tutustu Hesariin 2 viikkoa maksutta!'
    ]

    return (
        <div className={style.tiedotteet}>
            <div className={style.tiedotteetContainer}>
                {tiedotteet.map(({otsikko, teksti}, i) => <Tiedote key={i} otsikko={otsikko} teksti={teksti} />)}
                {mainokset.map((mainos, i) => <Mainos key={i} mainos={mainos} />)}
            </div>
        </div>
    )
}
