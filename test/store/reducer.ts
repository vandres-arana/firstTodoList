const initialState = {
  counter: 10,
}

type IncrementAction = {
  type: 'INCREMENT';
}

type DecrementAction = {
  type: 'DECREMENT',
  payload?: any;
}

// Pure Function
const reducer = (state = initialState, action: IncrementAction | DecrementAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };

    case 'DECREMENT':
      return { ...state, counter: state.counter - (action.payload || 1) };
  
    default:
      return state;
  }
}

export const increment = (): IncrementAction => ({
  type: 'INCREMENT'
})

export const decrement = (): DecrementAction => ({
  type: 'DECREMENT',
  payload: 1,
})

export default reducer;