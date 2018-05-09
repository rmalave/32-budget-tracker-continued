import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from '../actions/expenseActions';


const initialState = {
  expenses: []
}

const expenseReducer = (state = initialState, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch(action.type) {

    case EXPENSE_CREATE:
      console.log(action);
      return { ...state, expenses:  state.expenses.concat(action.payload) }

    default:
      return state;
  }
}

export default expenseReducer;
