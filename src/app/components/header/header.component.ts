import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { KabloviState } from 'src/app/store/reducers/kablovi.reducer';
import { KabloviService } from 'src/app/services/kablovi.service';
import Kabl from 'src/app/models/kabl.model';
import { sacuvajKablove, izbaciKablove } from 'src/app/store/actions/kablovi.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('parentData') public adresa;

  public sviKablovi: Kabl[];

  constructor(
    private _kabloviStore: Store<{ kabl: KabloviState }>,
    private _kabloviService: KabloviService,
    private _router: Router,) {}

  ngOnInit(): void {
    this._kabloviService.fetchSveKablove().subscribe((data) => { //pribavljaju se svi kablovi 
      this.sviKablovi = data;
    })
  }

  onClick(vrsta: HTMLLinkElement){

    this._kabloviStore.dispatch(izbaciKablove()); //najpre praznimo store 

    let tip: string = vrsta.href;
    tip = tip.slice(tip.lastIndexOf('/') + 1)  //pribavlja se tip preko href
    console.log(tip);
    
    let kablovi: Kabl[] = [];

    this.sviKablovi.forEach(kabl => {
      if(kabl.tip == tip){  //ubacuju se u niz samo klablovi tipa koji nam treba
        kablovi.push(kabl);
      }
    })  
  
    this._kabloviStore.dispatch(sacuvajKablove({ kablovi })); //ubacujemo kablove u store
  }

}
