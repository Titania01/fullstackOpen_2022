import { useEffect, useState } from "react";
import phoneServices from "./services/phones";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFilterd] = useState("");
  const [message, setMessage] = useState("You have added this person before..");

  useEffect(() => {
    phoneServices.getAll().then((initialPhone) => {
      setPersons(initialPhone);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    if (!newName.trim()) return null;

    const personExist = persons.find(
      (person) =>
        person.name.toLowerCase().trim() === newName.toLowerCase().trim()
    );
    if (personExist) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = { ...personExist, number: newNumber };
        phoneServices.update(personExist.id, personToUpdate).then((res) => res);
      }
      setNewName("");
      return;
    }

    const newObj = { name: newName.trim(), number: newNumber.trim() };

    phoneServices.create(newObj).then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setMessage(`You added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleDelete = (id) => {
    const itemToDelete = persons.find((person) => person.id === id);

    phoneServices.removePerson(itemToDelete.id);
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleNewName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleFilter = persons.filter(
    (person) =>
      person.name.toLowerCase().trim().indexOf(filtered.toLowerCase().trim()) >
      -1
  );

  const handleFilterE = (e) => setFilterd(e.target.value);

  const contactToShow = filtered.trim() ? handleFilter : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter handleFilterE={handleFilterE} />
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNewName={handleNewName}
        newName={newName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Person persons={contactToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
