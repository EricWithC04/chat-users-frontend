import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles["navbar-elements"]}>
                <div>
                    <img src="" alt="nothing" />
                </div>
                <ul>
                    <li>
                        <a href="/login">Iniciar Sesión</a>
                    </li>
                    <li>
                        <a href="/register">Registrarse</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar