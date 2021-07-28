import {Component, ContentChild, ElementRef, Input, TemplateRef} from '@angular/core';
import {AuthorizationService} from '../../modules/services/authorization.service';
import {MAIN_MENU_CONTENT, MainMenuInfo} from './menu-list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  @Input() sideBarElements: string[];
  @Input() reportsSaved: string[];

  @ContentChild(TemplateRef, {static: true})
  template: TemplateRef<ElementRef>;

  selected: string;
  startItem = 0;
  itemLimit = 0;

  menu: MainMenuInfo[] = MAIN_MENU_CONTENT;

  constructor(private token: AuthorizationService) {
  }

  showMoreItems() {
    this.itemLimit = this.itemLimit + 4;
    this.token.saveAuthorization(`${this.sideBarElements}`);
  }

  showLessItems() {
    this.itemLimit = this.itemLimit - 4;
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }
}
