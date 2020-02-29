import React, { useState } from 'react';
import { initialRacerState } from '../reducers';

export default function AddForm(props) {
  const [racer, setRacer] = useState(initialRacerState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRacer({ ...racer, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!racer.racerId || !racer.firstName || !racer.lastName) return;

        props.addRacer(racer);
        setRacer(initialRacerState);
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
      <button>Add new racer</button>
    </form>
  );
}
