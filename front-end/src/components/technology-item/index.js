import styles from './technologyItem.module.css'

export default function TechnologyItem({ name}) {
    return (
        <div className={styles.container}>
            {name}
        </div>
    )
}