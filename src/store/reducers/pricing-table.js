
const pricing = (state = false, action) => {
  switch (action.type) {
    case 'pricingData':
      return { pricingData: action.payload };
    default:
      return state;
  }
};

export default pricing;
