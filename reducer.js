import {INCREMENT, DECREMENT} from './Action';

export const incremet = () => ({
  type: INCREMENT,
});
export const dencremet = () => ({
  type: DECREMENT,
});

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default rootReducer;
