import React from 'react'
import styles from './Header.module.css'

export default function Header() {

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerLeft}>
          <div style={{marginRight: '40px', fontSize: 30}}>
            HELSINGIN SANOMAT
          </div>
          <div style={{marginRight: '40px'}}>Uutiset</div>
          <div>Lehdet</div>
        </div>
        <div className={styles.headerLeft}>
          <div style={{marginRight: '40px'}}>Tilaa</div>
          <div style={{marginRight: '40px'}}>Kirjaudu</div>
          <div style={{marginRight: '40px'}}>Hae</div>
          <div>Valikko</div>
        </div>
      </div>
    </header>
  )
}
