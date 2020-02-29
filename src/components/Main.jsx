import React, { useState } from 'react';
import { addRacer, deleteRacer, updateRacer } from '../actions';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import EditForm from './EditForm';
import RacerList from './RacerList';
import initialRacerState from '../reducers';

function Main(props) {
  const [currentRacer, setCurrentRacer] = useState(initialRacerState);
  const [editing, setEditing] = useState(false);

  const editRacer = racer => {
    setEditing(true);

    setCurrentRacer({
      racerId: racer.racerId,
      bibNumber: racer.bibNumber,
      firstName: racer.firstName,
      lastName: racer.lastName
    });
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit Racer</h2>
              <EditForm
                editing={editing}
                setEditing={setEditing}
                currentRacer={currentRacer}
                updateRacer={props.updateRacer}
              />
            </>
          ) : (
            <>
              <h2>Add Racer</h2>
              <AddForm addRacer={props.addRacer} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View racers</h2>
          <RacerList
            racers={props.racers}
            editRacer={editRacer}
            deleteRacer={props.deleteRacer}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    racers: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRacer: racer => dispatch(addRacer(racer)),
    deleteRacer: racerId => dispatch(deleteRacer(racerId)),
    updateRacer: (bibNumber, racer) => dispatch(updateRacer(bibNumber, racer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
