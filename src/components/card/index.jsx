import React from 'react'
import styles from "./Card.module.scss"
const Card = ({children,style}) => {
  return (
    <div style={{...style}} className={styles.container}>{children}</div>
  )
}

export default Card