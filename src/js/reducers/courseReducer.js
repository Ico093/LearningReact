import * as type from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case type.LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state;
  }
}