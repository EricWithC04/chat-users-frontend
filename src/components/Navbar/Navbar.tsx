import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.navbar}>
            <div className={styles["navbar-elements"]}>
                <div>
                    <img src="" alt="nothing" />
                </div>
                <ul>
                    <li onClick={() => navigate("/login")}>
                        <p>Iniciar Sesión</p>
                    </li>
                    <li onClick={() => navigate("/register")}>
                        <p>Registrarse</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar