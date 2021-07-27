import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() signIn = new EventEmitter<string[]>();

  currentMail: string;
  currentPass: string;

  logInEv(login: string[]) {
    this.signIn.emit(login);
  }
}
