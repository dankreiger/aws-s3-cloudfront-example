export const woofInitialState = {
  items: [],
};

/**
 * @function woofReducer
 * @type {React.Reducer<woofState, woofAction>}
 * @param {woofState} state
 * @param {woofAction} action
 */
const woofReducer = (state = woofInitialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
export default woofReducer;
