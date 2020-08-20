import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devekom';
  public adresa: string = ""; //adresu primamo iz footera i saljemo u header
}
