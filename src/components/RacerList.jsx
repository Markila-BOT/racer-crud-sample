import React from 'react';

export default function RacerList(props) {
  return (
    <table>
      <thead>
        <tr colSpan={5}>
          <th>Racer Id</th>
          <th>Bib Number</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {props.racers.length > 0 ? (
          props.racers.map(racer => (
            <tr key={racer.id}>
              <td>{racer.racerId}</td>
              <td>{racer.bibNumber}</td>
              <td>{racer.firstName}</td>
              <td>{racer.lastName}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRacer(racer);
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteRacer(racer.racerId)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr colSpan={5}>
            <td>No racers</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
