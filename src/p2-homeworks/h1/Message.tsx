import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div className={styles.avatarWrapper}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={styles.messageWrapper}>
                <h3 className={styles.nickname}>{props.name}</h3>
                <p className={styles.text}>{props.message}</p>
                <span className={styles.dateMessage}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
