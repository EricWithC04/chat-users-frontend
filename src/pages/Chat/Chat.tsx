import React from 'react'
import ChatsList from '../../components/ChatsList/ChatsList'
import styles from './Chat.module.css'

const Chat = () => {
    return (
        <div className={styles['container']}>
            <h1>Chat</h1>
            <ChatsList />
        </div>
    )
}

export default Chat