import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Item icon name
  tooltip?: string,   // Tooltip text
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]  // Dropdown items
}
interface IChildItem {
  name: string,       // Display text
  state: string       // Router state
}

@Injectable()
export class NavigationService {
  constructor() {}

  defaultMenu:IMenuItem[] = [
    {
      name: 'PANEL PRINCIPAL',
      type: 'link',
      tooltip: 'Panel principal',
      icon: 'home',
      state: 'dashboard'
    },
    {
      name: 'GESTION DE USUARIOS',
      type: 'link',
      tooltip: 'Gestión de usuarios',
      icon: 'face',
      state: 'dashboard'
    },
    {
      name: 'DELIVERY',
      type: 'link',
      tooltip: 'Delivery',
      icon: 'local_shipping',
      state: 'dashboard'
    },
    {
      name: 'MOVIMIENTOS',
      type: 'link',
      tooltip: 'Movimientos',
      icon: 'link',
      state: 'dashboard'
    },
    {
      name: 'REPORTES',
      type: 'link',
      tooltip: 'Reportes',
      icon: 'book',
      state: 'dashboard'
    }
  ]


  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle:string = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
