import { ADD_RACER, DELETE_RACER, UPDATE_RACER } from './actionTypes';

export const addRacer = racer => {
  return {
    type: ADD_RACER,
    racer
  };
};

export const deleteRacer = racerId => {
  return {
    type: DELETE_RACER,
    racerId
  };
};

export const updateRacer = (bibNumber, racer) => {
  return {
    type: UPDATE_RACER,
    bibNumber,
    racer
  };
};
