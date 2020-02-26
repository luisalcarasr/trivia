import { combineReducers } from 'redux';
import { language } from './reducers';
import updateLanguage from './actions/updateLanguage';

const languageReducers = combineReducers({
  language: language
});

export { languageReducers, updateLanguage };