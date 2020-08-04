import { Component, OnInit } from '@angular/core';
import { KabloviService } from 'src/app/services/kablovi.service';
import Kabl from 'src/app/models/kabl.model';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  private kabl: Kabl;

  constructor(private _service: KabloviService) { }

  ngOnInit(): void {
    this._service
      .fetchKablById(1)
      .subscribe((data: Kabl) => {
      this.kabl = data;
      console.log(this.kabl);
    })
  }

}
