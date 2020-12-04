export default (state = {}, action) => {
  const {name,brand,price,abv,fluidOunces, id}= action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name:name,
          brand:brand,
          price:price,
          abv:abv,
          fluidOunces:fluidOunces,
          id:id
        }
      });
      default:
        return state;
  }
};