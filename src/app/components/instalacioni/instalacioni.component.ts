import { Component, OnInit } from '@angular/core';
import { KabloviState } from 'src/app/store/reducers/kablovi.reducer';
import { Store, select } from '@ngrx/store';
import { getIds, getKablovi } from 'src/app/store/reducers';
import Kabl from 'src/app/models/kabl.model';
import { fetchSveKablove, sacuvajKablove } from 'src/app/store/actions/kablovi.action';
import { KabloviService } from 'src/app/services/kablovi.service';

@Component({
  selector: 'app-instalacioni',
  templateUrl: './instalacioni.component.html',
  styleUrls: ['./instalacioni.component.css']
})
export class InstalacioniComponent implements OnInit {

  public tip: string = "instalacioni";

  public sviKablovi: Kabl[];

  public konacniKablovi: Kabl[] = [];
  
  constructor(
    private _kabloviStore: Store<{ kabl: KabloviState }>,
    private _kabloviService: KabloviService
  ){}

  ngOnInit(): void {
    
    this._kabloviService.fetchSveKablove().subscribe((data) => {
      this.sviKablovi = data;

      let kablovi: Kabl[] = [];

      this.sviKablovi.forEach(kabl => {
        if(kabl.tip == this.tip)
          kablovi.push(kabl);
      })

      this._kabloviStore.dispatch(sacuvajKablove({ kablovi }));

      this._kabloviStore.pipe(select(getKablovi)).subscribe((data) => {
        for(let value in data) {
          this.konacniKablovi.push(data[value]);
        }
      })
    });
  }

}
