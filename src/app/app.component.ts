import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditcardFormComponent } from './components/creditcard-form/creditcard-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CreditcardFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CreditCard-Form-Validation';
}
