import styles from "./RegisterForm.module.css"

const RegisterForm = () => {
    return (
        <form className={styles["main-form"]} onSubmit={(e) => e.preventDefault()}>
            <h3>Registro</h3>
            <div className={styles["form-inputs"]}>
                <input name="name" type="text" placeholder="Nombre" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Contraseña" />
                <input name="confirmPassword" type="password" placeholder="Repetir Contraseña" />
            </div>
            <button type="submit" className={styles["register-button"]}>Registrarse</button>
        </form>
    )
}

export default RegisterForm