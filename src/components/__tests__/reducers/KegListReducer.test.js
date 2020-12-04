import KegListReducer from '../../../reducers/KegListReducer';

describe('KegListReducer', () =>{
  test('The reducer for list of kegs sholud return default if we tell it to do nothing.', () => {
    expect(KegListReducer({}, {type:null})).toEqual({});
    })
});

describe('KegListReducer', () =>{
  let action;
  const kegData = {
    name:'DOUBLE IPA',
    brand:'DESCHUTES',
    price: 6,
    abv: 8,
    fluidOunces:124,
    id: 1
  }
  test('The reducer for list of kegs sholud return default if we tell it to do nothing.', () => {
      const {name,brand,price,abv,fluidOunces,id}= kegData;
      action = {
        type: 'ADD_KEG',
        name:'DOUBLE IPA',
        brand:'DESCHUTES',
        price:6,
        abv:abv,
        fluidOunces:124,
        id: id
      };
      expect(KegListReducer({},action)).toEqual({
        [id]:{
          name:name,
          brand:brand,
          price:price,
          abv:abv,
          fluidOunces:fluidOunces,
          id:1
        }
      })
    })
});
      