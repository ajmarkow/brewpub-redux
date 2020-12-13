import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import FormVisibleReducer from '../../reducers/FormVisibleReducer';
import KegListReducer from '../../reducers/KegListReducer';

let store= createStore(rootReducer);

describe('rootReducer', ()=>{
  test('return default if not passed an action', () => {
        expect(rootReducer({}, {type: null})).toEqual({fullListOfBrews:{},
        formVisible: false
      });
    });
  
    test('making sure kegList and root reducer are synced', () => {
      expect(store.getState().fullListOfBrews).toEqual(KegListReducer(undefined, {type: null}));
  });

  test('Make sure ADD_KEG works when in root reducer', () => {
    const action = { 
    type: 'ADD_KEG',
    name:'DOUBLE IPA',
    brand:'DESCHUTES',
    price: 6,
    abv: 8,
    fluidOunces:124,
    id: 1}
    store.dispatch(action);
    expect(store.getState().fullListOfBrews).toEqual(KegListReducer(undefined, action));
});

  test('Make sure TOGGLE_FORM works when in root reducer', () =>{
    const action= {type:'TOGGLE_FORM'}
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(FormVisibleReducer(undefined, action));

  })

});