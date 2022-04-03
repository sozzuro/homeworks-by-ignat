import React from 'react'
import styles from './Error404.module.css'
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div className={styles.content}>
            <div className={styles.errorTitle}>404</div>
            <div className={styles.errorSubtitle}>Page not found!</div>
            <div className={styles.circle}>
                <span className={styles.eyes}>:</span>
                <span className={styles.mouth}>(</span>
            </div>
            <NavLink className={styles.link} to={'/'}>вернуться на главную...</NavLink>
        </div>
    )
}

export default Error404
