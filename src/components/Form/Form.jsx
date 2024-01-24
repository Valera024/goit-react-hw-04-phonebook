import styles from "./form.module.css"

const Form = ({onSubmit}) => {
        return (
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className={styles.input} required />
                <label htmlFor="number">Number</label>
                <input type="tel" name="number" className={styles.input } required />
                <button type="submit" className={styles.btn}>Add contact</button>
            </form>
        )
}

export default Form