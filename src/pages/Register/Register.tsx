import styles from "./Register.module.css"
import arrowBack from "../../assets/arrow-back.png"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    return (
        <div className={styles["container"]}>
            <div className={styles["back"]}>
                <img src={arrowBack} alt="back arrow" onClick={() => navigate(-1)} />
            </div>
        </div>
    )
}

export default Register