import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import { v4 as uuid } from "uuid"

// import ContactCard from "./ContactCard"
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
        <Route path="/add" element={AddContact} />
        <Route path="/" element={ContactList} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
      {/* <ContactCard />   */}
    </div>
  );
}

export default App;
