import React, {} from 'react';
import { Menu } from 'semantic-ui-react';
import LanguageDropdown from './LanguageDropdown';

const Navbar = () => {
  return (
    <Menu pointing>
      <Menu.Item
        name='home'
        active={true}
        onClick={() => {}}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
        <LanguageDropdown></LanguageDropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;