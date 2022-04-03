import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

function Header() {

    
    return (
        <div className={styles.header}>
            <NavLink className={({isActive}) => {
                return isActive ? `${styles.link} ${styles.active}` : styles.link
            }} to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink className={({isActive}) => {
                return isActive ? `${styles.link} ${styles.active}` : styles.link
            }} to={'/junior'}>junior</NavLink>
            <NavLink className={({isActive}) => {
                return isActive ? `${styles.link} ${styles.active}` : styles.link
            }} to={'/junior-plus'}>junior+</NavLink>
            <i className={styles.arrow}></i>
        </div>
    )
}

export default Header
