import update from 'immutability-helper';

export default function (state = {}, action) {
    switch (action.type) {
      case 'UPDATE_VAR_A':
        return update(state, {variableA: {$set: action.newValue}});
      default:
        return state;
    }
};
