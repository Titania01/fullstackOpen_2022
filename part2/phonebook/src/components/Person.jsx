import React from "react";

const Person = ({ persons, onDelete }) => {
  return (
    <div>
      {" "}
      <div>
        {persons.map((person) => {
          return (
            <div key={person.name}>
              <span>
                {person.name} {person.number}
              </span>
              <button onClick={() => onDelete(person.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Person;
