import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() public tekstZaHeader = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.tekstZaHeader.emit('Dimitrija Tucovića 182, 18250 Niš');
  }

}
