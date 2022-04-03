import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    } // need to fix
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div className={'hw2'}>

            {mappedAffairs}

            {/*<button className={props.filter === 'all' ? styles.activeButton : styles.button} onClick={setAll}>All*/}
            {/*</button>*/}
            {/*<button className={props.filter === 'high' ? styles.activeButton : styles.button} onClick={setHigh}>High*/}
            {/*</button>*/}
            {/*<button className={props.filter === 'middle' ? styles.activeButton : styles.button}*/}
            {/*        onClick={setMiddle}>Middle*/}
            {/*</button>*/}
            {/*<button className={props.filter === 'low' ? styles.activeButton : styles.button} onClick={setLow}>Low*/}
            {/*</button>*/}

            <SuperButton className={props.filter === 'all' ? styles.activeButton : ''} onClick={setAll}>All
            </SuperButton>
            <SuperButton className={props.filter === 'high' ? styles.activeButton : ''} onClick={setHigh}>High
            </SuperButton>
            <SuperButton className={props.filter === 'middle' ? styles.activeButton : ''}
                         onClick={setMiddle}>Middle
            </SuperButton>
            <SuperButton className={props.filter === 'low' ? styles.activeButton : ''} onClick={setLow}>Low
            </SuperButton>
        </div>
    )
}

export default Affairs
