import { useState } from 'react'
import styles from './ChatItem.module.css'

import avatar from '../../assets/avatar_1.jpg'

const ChatItem = () => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <div 
            className={`${styles["chat-item-container"]} ${isClicked ? styles["item-clicked"] : ""}`}
            onClick={() => setIsClicked(!isClicked)}
        >
            <img src={avatar} alt="foto" />
            <div className={styles["chat-item-info"]}>
                <p>Username</p>
                <p>Message</p>
            </div>
        </div>
    )
}

export default ChatItem