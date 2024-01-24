import { useState, useEffect } from "react";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])


  const onDeleteClick = (id) => {
    setContacts((prevState) => (
      prevState.filter((contact) => contact.id !== id)
    ))
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const inputName = document.querySelector("input[name='name']");
    const inputNumber = document.querySelector("input[name='number']");
    const newName = inputName.value;
    const newNumber = inputNumber.value;

    if (contacts.some((contact) => contact.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${inputName.value} is already in contacts.`);
    } else {
      updateContacts(newName, newNumber);
    }
    evnt.target.reset();
  }


  const updateContacts = (newName, newNumber) => {
    setContacts((prevState) => [
    ...prevState,
    { id: nanoid(), name: newName, number: newNumber }
  ]);
  }

  const handleSearchInputChange = () => {
    const inputSearch = document.querySelector("input[name='search']").value
    setFilter({
      filter: inputSearch
    })
  }

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={ handleSubmit}/>
        </Section>
        <Section title="Contacts">
          <Filter onInput={handleSearchInputChange}/>
          <Contacts contacts={contacts} filter={filter} onClick={onDeleteClick} />
        </Section>
      </>
    )
}

export default App