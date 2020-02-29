import { ADD_RACER, DELETE_RACER, UPDATE_RACER } from '../actions/actionTypes';

export const initialRacerState = {
  racerId: '',
  bibNumber: null,
  firstName: '',
  lastName: ''
};

//CRUD Edit can be handle from the form part

const racerReducer = (state = [], action) => {
  switch (action && action.type) {
    case ADD_RACER:
      action.racer.bibNumber = state.length + 1;
      const isFound = state.some(
        racer => racer.racerId === action.racer.racerId
      );
      const adderRacer = !isFound ? [...state, action.racer] : state;
      return adderRacer;
    case DELETE_RACER:
      const deletedRacer = state.filter(
        racer => racer.racerId !== action.racerId
      );
      return deletedRacer;
    case UPDATE_RACER:
      const updatedRacer = state.map(racer =>
        racer.bibNumber === action.bibNumber ? action.racer : racer
      );
      return updatedRacer;
    default:
      return state;
  }
};

export default racerReducer;
