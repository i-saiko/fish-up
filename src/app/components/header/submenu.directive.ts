import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSubmenu]'
})
export class SubmenuDirective {

  @HostBinding('class.active') isOpen = false;

  @HostListener('click') toggleOpen($event) {
    this.isOpen = !this.isOpen;
  }
}
