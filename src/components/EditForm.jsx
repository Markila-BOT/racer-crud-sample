import React, { useState, useEffect } from 'react';

export default function EditForm(props) {
  const [racer, setRacer] = useState(props.currentRacer);

  useEffect(() => {
    setRacer(props.currentRacer);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRacer({ ...racer, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateRacer(racer.bibNumber, racer);
      }}
    >
      <label>Racer ID</label>
      <input
        type="text"
        name="racerId"
        value={racer.racerId}
        onChange={handleInputChange}
      />
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={racer.firstName}
        onChange={handleInputChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={racer.lastName}
        onChange={handleInputChange}
      />
      <button>Update racer</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
}
