import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Kabl from '../models/kabl.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KabloviService {
  private _url = 'http://localhost:3000/kablovi';
  constructor(private http: HttpClient) { }

  public fetchKablById(idNumber: number): Observable<Kabl> {
    return this.http.get<Kabl>(`${this._url}/${idNumber}`);
  }

  public fetchSveKablove(): Observable<Kabl[]> {
    return this.http.get<Kabl[]>(this._url);
  }
}
