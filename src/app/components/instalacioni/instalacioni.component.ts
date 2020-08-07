import { Component, OnInit, Input } from '@angular/core';
import { KabloviState } from 'src/app/store/reducers/kablovi.reducer';
import { Store, select } from '@ngrx/store';
import { getIds, getKablovi } from 'src/app/store/reducers';
import Kabl from 'src/app/models/kabl.model';
import { fetchSveKablove, sacuvajKablove, izbaciKablove } from 'src/app/store/actions/kablovi.action';
import { KabloviService } from 'src/app/services/kablovi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instalacioni',
  templateUrl: './instalacioni.component.html',
  styleUrls: ['./instalacioni.component.css']
})
export class InstalacioniComponent implements OnInit {

  public konacniKablovi: Kabl[] = [];

  constructor(
    private _router: Router,
    private _kabloviStore: Store<{ kabl: KabloviState }>
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



// <div class="kablovi ">
//     <div *ngFor="let kabl of konacniKablovi" class="card" style="width: 20rem;">
//         <img class="card-img-top" src="{{ kabl.slika }}" alt="Card image cap">
//         <div class="card-body">
//           <h3 class="card-title">{{ kabl.naziv }}</h3>
//           <p class="card-text">{{ kabl.opis }}</p>
//           <button href="#" class="btn btn-primary">Dodaj u korpu </button>
//         </div>
//     </div>
// </div>











// this._kabloviService.fetchSveKablove().subscribe((data) => {
    //   this.sviKablovi = data;

    //   let kablovi: Kabl[] = [];

    //   this.sviKablovi.forEach(kabl => {
    //     if(kabl.tip == this.tip)
    //       kablovi.push(kabl);
    //   })

    //   this._kabloviStore.dispatch(sacuvajKablove({ kablovi }));

    //   this._kabloviStore.pipe(select(getKablovi)).subscribe((data) => {
    //     for(let value in data) {
    //       this.konacniKablovi.push(data[value]);
    //     }
    //   })
    // });