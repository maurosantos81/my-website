import styles from './navbar.module.css'

export default function Navbar() {
    return <div className={styles.container}>
        <div>
            Inicio
            </div>

            <div className={styles.right}>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Portfolio</p>
                <p className={styles['hire-me']}>Hire me</p>
            </div>
    </div>
}