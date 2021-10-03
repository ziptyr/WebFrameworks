import React from 'react'
import Luetuimmat from './Luetuimmat'

export default function Sivupalkki() {
  const luetuimmat = [
    {
      aihe: 'Henkilö',
      otsikko: 'Monella on lähipiirissä mies, jota "ketuttaa" koko ajan - Se voi olla vakavampi merkki kuin ajattelemmekaan, sanoo psykologi Teemu Ollikainen'
    },
    {
      aihe: 'Treeni',
      otsikko: 'Maailman tunnetuimmassa kuntosali-ohjelmassa on vain kuusi liikettä - Tälläinen on Arnold Schwarzeneggerin "kultainen kuusikko", jonka teho on edelleen kiistaton'
    },
    {
      aihe: 'Koronastrategia',
      otsikko: 'Mitä tapahtuu maski- ja etätyösuositukselle? HS kokosi Suomen uuden korona-strategian muutokset ja auki olevat asiat'
    },
    {
      aihe: 'Sarjakuvat',
      otsikko: 'Puoliso jätti Anna Härmälän yksin vauvan kanssa - Härmälä teki epätoivoisesta tilanteestaan "julman hauskan" sarjakuvan'
    },
    {
      aihe: 'Arkkitehtuuri',
      otsikko: '"Pyörryttävän ueat tilat" - Tiiviisti rakennettuun Sörnäisiin nousi talo, joka saa jopa taiteen ammattilaiset haukkomaan henkeään'
    },
    {
      aihe: 'Saksa',
      otsikko: 'Armin Laschetin voiton piti olla varma, mutta nyt hän taistelee uskottavuudestaan: HS seurasi, miten Saksan liitto-kansleriehdokkaan vaalitilaisuus muuttui vihellyskonsertiksi'
    },
    {
      aihe: 'Energia',
      otsikko: 'Helenin kaukolämmön hinta nousee 30 prosenttia, mutta algoritmi näytti vielä suurempaa korotusta'
    }
  ]

  return (
    <div>
      <Luetuimmat luetuimmat={luetuimmat} />
    </div>
  )
}
