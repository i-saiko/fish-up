import {HeaderMenuEnum} from '../../enums/header-menu/header-menu.enum';

export interface MenuInfo {
  title: string;
  route: string;
  isMobileView: boolean;
}

export interface MainMenuInfo extends MenuInfo {
  name: HeaderMenuEnum;
  title: string;
  route: string;
  nestedMenu: MenuInfo[];
  permissions: Permissions | string;
  isCollapsed: boolean;
  iconClass: string;
}

export const MAIN_MENU_CONTENT: MainMenuInfo[] = [
  {
    name: HeaderMenuEnum.GOODS,
    title: 'Поступления',
    route: '/portal/goods',
    permissions: '',
    isCollapsed: false,
    isMobileView: true,
    iconClass: 'exit_to_app',
    nestedMenu: []
  },
  {
    name: HeaderMenuEnum.SHIPMENTS,
    title: 'Отгрузки',
    route: '/portal/shipments',
    permissions: '',
    isCollapsed: false,
    isMobileView: true,
    iconClass: 'local_shipping',
    nestedMenu: []
  },
  {
    name: HeaderMenuEnum.CONTACTS,
    title: 'Контрагенты',
    route: '/portal/contacts',
    nestedMenu: [],
    permissions: '',
    isCollapsed: false,
    isMobileView: true,
    iconClass: 'supervised_user_circle',
  },
  {
    name: HeaderMenuEnum.STORAGES,
    title: 'Места хранения',
    route: '/portal/storages',
    permissions: '',
    isCollapsed: false,
    isMobileView: true,
    iconClass: 'home_work',
    nestedMenu: []
  },
  {
    name: HeaderMenuEnum.USERS,
    title: 'Пользователи',
    route: '/portal/users',
    nestedMenu: [],
    permissions: '',
    isCollapsed: false,
    isMobileView: true,
    iconClass: 'account_circle',
  },
];
