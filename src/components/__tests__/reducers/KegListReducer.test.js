import KegListReducer from '../../../reducers/KegListReducer';

describe('KegListReducer', () =>{
  test('The reducer for list of kegs sholud return default state if we tell it to do nothing.', () => {
    expect(KegListReducer({}, {type:null})).toEqual({});
    })
});

describe('KegListReducer', () =>{
  let action;
  const kegData = {
    type: 'ADD_KEG',
    name:'DOUBLE IPA',
    brand:'DESCHUTES',
    price:6,
    abv:9,
    fluidOunces:124,
    id: 1
  };
  const currentState = {
   1:{ name:'DOUBLE IPA',
    brand:'DESCHUTES',
    price: 6,
    abv: 8,
    fluidOunces:124,
    id: 1},
    2:{ name:'IPA',
    brand:'NINKASI',
    price: 7,
    abv: 5,
    fluidOunces:124,
    id: 2}
  }
  test('The reducer for list of kegs should add a keg if we pass in that action type.', () => {
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

      test('Will remove a keg from list', () => {
        action = {
          type: 'REMOVE_KEG',
          id: 1
      }
            expect(KegListReducer(currentState,action)).toEqual({
          2: {name:'IPA',
            brand:'NINKASI',
            price: 7,
            abv: 5,
            fluidOunces:124,
            id: 2 }
          });
  });

});


      