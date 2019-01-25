
const activeUIContainer = (state = { activeNameOfComponent: 'rowTimeFilter' }, action) => {
//   console.log('Reducer activeUIContainer 1)state 2)action', state, action);
  switch (action.type) {
    case 'changeUIContainer':
      return { activeNameOfComponent: action.payload.activeNameOfComponent };
    default:
      return state;
  }
};

export default activeUIContainer;
