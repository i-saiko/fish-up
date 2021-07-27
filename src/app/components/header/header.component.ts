import {Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() signOut = new EventEmitter<Event>();

  @Input() userName: string;
  @Input() isLoggedIn: boolean;

  @ContentChild(TemplateRef, {static: true})
  template: TemplateRef<ElementRef>;

  logOutEv() {
    this.signOut.emit();
  }
}
