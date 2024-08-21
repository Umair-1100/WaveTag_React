import React from 'react'
import styles from './EditAccessorie.module.scss'

const EditAccessorie = () => {
  return (
    <div className={styles.editaccessorie_main}>
        <img src="/qrcode.png" alt="" />
        <div className={styles.edit_text}>
        <h1>Activate accessories to Thinker's profile</h1>
        <p>Scan the PopCode with your phone to launch the activation flow</p>
        <h3>Use your app to activate accessories.</h3>
        </div>
        
    </div>
  )
}

export default EditAccessorie