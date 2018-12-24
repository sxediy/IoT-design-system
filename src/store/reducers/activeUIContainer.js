
const activeUIContainer = (state = { activeKey: 'pricingTable' }, action) => {
//   console.log('Reducer activeUIContainer 1)state 2)action', state, action);
  switch (action.type) {
    case 'changeUIContainer':
      return { activeKey: action.payload.activeKey };
    default:
      return state;
  }
};

export default activeUIContainer;
