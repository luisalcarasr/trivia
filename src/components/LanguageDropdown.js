import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { getLanguages } from '../services/translator';
import { useDispatch, useSelector } from 'react-redux';
import { updateLanguage } from '../language';

const LanguageDropdown = () => {

  const [languages, setLanguages] = useState([]);
  const currentLanguageCode = useSelector(state => state.language); 
  const languageDispatch = useDispatch();

  useEffect(() => {
    getLanguages(currentLanguageCode).then(langs => {
      setLanguages(langs.map(lang => {
        return {
          key: lang.code,
          value: lang.code,
          text: lang.name,
        }
      }));
    });
  },[currentLanguageCode]);

  return <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languages}
    value={currentLanguageCode}
    selection
    placeholder='Select language'
    onChange={(e, props) => languageDispatch(updateLanguage(props.value))}
  />
};

export default LanguageDropdown;