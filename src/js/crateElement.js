import menu from '../data/menu.json';
import menuItems from '../template/template.hbs';
import refs from './refs';

const markup = menuItems(menu);
refs.menuRef.insertAdjacentHTML('beforeend', markup);