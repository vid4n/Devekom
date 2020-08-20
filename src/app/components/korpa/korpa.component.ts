import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { KorpaState } from 'src/app/store/reducers/korpa.reducer';
import { getKabloveIzKorpe } from 'src/app/store/reducers';
import Kabl from 'src/app/models/kabl.model';
import { izbaciKablIzKorpe } from 'src/app/store/actions/korpa.action';
import { izbaciKablove } from 'src/app/store/actions/kablovi.action';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  public kabloviUKorpi: Kabl[];
  public cena: number = 0;

  constructor(
    private _korpaStore: Store<{ korpa: KorpaState }>
  ) { }

  ngOnInit(): void {
    this._korpaStore.pipe(select(getKabloveIzKorpe))
      .subscribe((data) => {
        this.kabloviUKorpi = [];
        for(let value in data){
          this.kabloviUKorpi.push(data[value]);
        }
      })

      this.odrediCenu();
  }

  public removeKabl(button: HTMLButtonElement): void{
    let id: number = parseInt(button.value);
    this._korpaStore.dispatch(izbaciKablIzKorpe({ id }));
    this.odrediCenu();
  }

  public onClick(): void{
    this._korpaStore.dispatch(izbaciKablove());
    alert("Narudžbina uspešna");
    this.kabloviUKorpi = [];

    this.odrediCenu();
  }

  odrediCenu(){
    this.cena = 0;
    
    this.kabloviUKorpi.forEach((kabl: Kabl) => {
      this.cena += kabl.cena;
    })
  }
  
}
