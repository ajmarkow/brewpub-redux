import rootReducer from '../../reducers/index';

describe('rootReducer', ()=>{
  test('return default if not passed an action', () => {
        expect(rootReducer({}, {type: null})).toEqual({fullListOfBrews:{},
        formVisible: false
      });
    });
  
});