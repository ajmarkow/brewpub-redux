import KegListReducer from '../../../reducers/KegListReducer';

describe('KegListReducer', () =>{
  test('The reducer for list of kegs sholud return default if we tell it to do nothing.', () => {
    expect(KegListReducer({}, {type:null})).toEqual({});
    })
});


      