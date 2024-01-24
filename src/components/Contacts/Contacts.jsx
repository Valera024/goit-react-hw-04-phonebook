import styles from "./contacts.module.css"

const Contacts = ({ onClick, contacts, filter }) => {
        const element = filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.filter.toLowerCase())).map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number} <button className={styles.btn} type="button" onClick={() => onClick(contact.id)}>Delete</button>
        </li>
      )) : contacts.map((contact) => (
      <li key={contact.id}>
              {contact.name}: {contact.number} <button className={styles.btn} type="button" onClick={() => onClick(contact.id)}>Delete</button>
      </li>
    ));
        return (
                <ul className={styles.list}>
                    {element}
                </ul>
        )  
}

export default Contacts