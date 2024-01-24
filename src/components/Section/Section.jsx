import styles from "./section.module.css"

const Section = ({title, children}) => {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </section>
        )
}

export default Section