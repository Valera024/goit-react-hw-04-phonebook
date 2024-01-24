import styles from "./filter.module.css"

const Filter = ({onInput}) => {
        return (
            <div className={styles.container}>
                <label htmlFor="search">Find contacts by name</label>
                <input name="search" className={styles.filter} type="text" onInput={onInput}/>
            </div>
        )
}

export default Filter