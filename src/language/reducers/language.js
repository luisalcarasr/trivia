const [defaultLanguage] = navigator.language.split('-') || navigator.userLanguage.split('-');

const language = (currentLanguage = defaultLanguage, action) => {
  switch(action.type) {
    case 'UPDATE LANGUAGE':
      return action.language;
    default:
      return currentLanguage;
  }
}

export default language;