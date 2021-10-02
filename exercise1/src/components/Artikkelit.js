import React from 'react'
import Artikkeli from './Artikkeli'

export default function Artikkelit() {
    const artikkelit = [
        {
            aihe: 'Saksa',
            otsikot: [
                'Armin Laschetin voiton piti olla varma, mutta nyt hän taistelee uskottavuudestaan: HS seurasi, miten Saksan liitto­kansleri­ehdokkaan vaali­tilaisuus muuttui vihellys­konsertiksi'
            ]
        },
        {
            aihe: 'Koronavirus',
            otsikot: [
                'Helsingin kaduilla ollaan jo henkisesti siirrytty pandemian jälkeiseen aikaan, erityisesti kulttuuri­tapahtumat houkuttelevat',
                'Mitä tapahtuu maski- ja etätyö­suositukselle? HS kokosi Suomen uuden korona­strategian muutokset ja auki olevat asiat',
                'Yli 80 prosentin rokotusaste vaatii vielä lisää ensimmäisiäkin annoksia, sillä osa vanhemmista ikäluokista on jättänyt toisen rokotteen ottamatta',
                'Hallitus lupasi avata Suomen ja antaa korona­vallan paikallis­tasolle'
            ]
        }
    ]

    return (
        <div>
            {artikkelit.map((osio, i) => <Artikkeli key={i} id={i} aihe={osio.aihe} otsikot={osio.otsikot} />)}
        </div>
    )
}
