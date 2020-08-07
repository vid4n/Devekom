import { Component, OnInit, Input } from '@angular/core';
import { KabloviState } from 'src/app/store/reducers/kablovi.reducer';
import { Store, select } from '@ngrx/store';
import { getIds, getKablovi } from 'src/app/store/reducers';
import Kabl from 'src/app/models/kabl.model';
import { fetchSveKablove, sacuvajKablove, izbaciKablove } from 'src/app/store/actions/kablovi.action';
import { KabloviService } from 'src/app/services/kablovi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-koaksijalni',
  templateUrl: './koaksijalni.component.html',
  styleUrls: ['./koaksijalni.component.css']
})
export class KoaksijalniComponent implements OnInit {

  //public tip: string = "instalacioni";

  //public sviKablovi: Kabl[];

  public konacniKablovi: Kabl[] = [];


  constructor(
    private _router: Router,
    private _kabloviStore: Store<{ kabl: KabloviState }>,
    //private _kabloviService: KabloviService
  ){}

  ngOnInit(): void {
    
    

    this._kabloviStore.pipe(select(getKablovi)).subscribe((data) => {
      if(data){
        for(let value in data) {
          this.konacniKablovi.push(data[value]);
        }
      }
    })
  }
}
