import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id);
    }

    const setClassPriority = (priority: string) => {
        switch (priority) {
            case 'high':
                return styles.priorityHigh
            case "middle":
                return styles.priorityMiddle
            case "low":
                return styles.priorityLow
        }
    }

    return (
        <div className={styles.content}>
            <span>{props.affair._id} -</span>
            <span> {props.affair.name} -</span>
            <span className={setClassPriority(props.affair.priority)}> {props.affair.priority} </span>

            <button className={styles.button} onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
