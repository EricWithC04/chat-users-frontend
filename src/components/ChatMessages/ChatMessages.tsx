import { useState, useRef, useEffect } from 'react'
import styles from './ChatMessages.module.css'

const ChatMessages = () => {

    const [messages, setMessages] = useState([
        {
            sender: 1,
            content: "Hola Mundo!"
        },
        {
            sender: 2,
            content: "Hola Mundo!"
        },
        {
            sender: 1,
            content: "Hola Mundo!"
        },
        {
            sender: 2,
            content: "Hola Mundo!"
        },
        {
            sender: 1,
            content: "Hola Mundo!"
        },
        {
            sender: 2,
            content: "Hola Mundo!"
        },
        {
            sender: 1,
            content: "Hola Mundo!"
        },
        {
            sender: 2,
            content: "Hola Mundo!"
        },
        {
            sender: 1,
            content: "Hola Mundo!"
        },
    ])

    const [newMessage, setNewMessage] = useState("")

    const messageEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value)
    }

    const handleSendMessage = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (newMessage.length > 0) {
            setMessages([...messages, {
                sender: 2,
                content: newMessage
            }])
            setNewMessage("")

        }
    }

    return (
        <div className={styles['messages-container']}>
            <div className={styles['messages-container-content']}>
                {
                    messages.map((message, index) => {
                        return (
                            <div 
                                key={index} 
                                className={`${styles['message-item']} ${message.sender === 1 ? styles['sender1'] : styles['sender2']}`}
                            >
                                <p>{message.content}</p>
                            </div>
                        )
                    })
                }
                <div ref={messageEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className={styles['message-form']}>
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={handleInputChange}
                    placeholder='Escribe un mensaje...'
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ChatMessages