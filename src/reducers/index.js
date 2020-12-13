import formVisibleReducer from './FormVisibleReducer';
import KegListReducer from './KegListReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  fullListOfBrews: KegListReducer
});

export default rootReducer;