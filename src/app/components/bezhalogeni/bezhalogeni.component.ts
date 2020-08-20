import { Component, OnInit, Input } from '@angular/core';
import { KabloviState } from 'src/app/store/reducers/kablovi.reducer';
import { Store, select } from '@ngrx/store';
import { getKablovi } from 'src/app/store/reducers';
import Kabl from 'src/app/models/kabl.model';
import { KabloviService } from 'src/app/services/kablovi.service';
import { Router } from '@angular/router';
import { KorpaState } from 'src/app/store/reducers/korpa.reducer';
import { dodajUKorpu } from 'src/app/store/actions/korpa.action';

@Component({
  selector: 'app-bezhalogeni',
  templateUrl: './bezhalogeni.component.html',
  styleUrls: ['./bezhalogeni.component.css']
})
export class BezhalogeniComponent implements OnInit {

  public vecDodati: number[] = [];
  public konacniKablovi: Kabl[];
  public poruka = ""
  constructor(
    private _router: Router,
    private _kabloviStore: Store<{ kabl: KabloviState }>,
    private _kabloviService: KabloviService,
    private _korpaStore: Store<{ korpa: KorpaState }>
  ){}

  ngOnInit(): void {
    this._kabloviStore.pipe(select(getKablovi)).subscribe((data) => {
      this.konacniKablovi = [];
      if(data){
        for(let value in data) {
          this.konacniKablovi.push(data[value]);
        }
      }
    })
  }

  public onClick(dodajKabl: HTMLButtonElement): void {  //na dugme dodaj u korpu dodaje se kabl u korpu, tj store
 
    if(!this.vecJeDodat(parseInt(dodajKabl.value))){  // da li je kabl vec dodat? ako je dodat, ne moze 2 puta isti
      this._kabloviService
      .fetchKablById(parseInt(dodajKabl.value))
      .subscribe((kabl: Kabl) => {
        this._korpaStore.dispatch(dodajUKorpu({ kabl }));   //dodaje se kabl u store
        
        this.poruka = "Kabl dodat u korpu!";  //ispisuje se odgovarajuca poruka dole desno na ekranu
        
        this.vecDodati.push(parseInt(dodajKabl.value));  //u niz vecDodati pushujemo id dodatog kabla kako bismo vodili racuna o kablovima koji su vec dodati, i onemogucili da se 2 puta doda isti kabl

        setTimeout(() => {  //nakon 1500ms obavestenje nestaje
          this.poruka = ""
        }, 1500);
      })
    } else{
      this.poruka = "Kabl je već dodat";

      setTimeout(() => {
        this.poruka = ""
      }, 1500);
    }

  }

  vecJeDodat(id: number): boolean{  //proverava da li vec imamo kabl sa odredjenim id-jem
    let ima: boolean = false;

    this.vecDodati.forEach((idDodatogKabla: number) => {
      if(id == idDodatogKabla){
        ima = true;
      }
    })
    
    return ima;
  }
  
}
