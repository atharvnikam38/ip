import React, { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Fetch contacts from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('http://localhost:5000/contacts');
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  // Add a new contact
  const addContact = async (e) => {
    e.preventDefault();
    const newContact = { name, phone };

    const response = await fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });

    const addedContact = await response.json();
    setContacts([...contacts, addedContact]);
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h1>Personal Phone Directory</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
