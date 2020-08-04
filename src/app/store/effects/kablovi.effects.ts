import Kabl from 'src/app/models/kabl.model';
import { KabloviService } from 'src/app/services/kablovi.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class KablEffects {
  loadKablovi$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType('[kablovi component] fetch sve kablove'),
      mergeMap(() =>
        this._kabloviService.fetchSveKablove().pipe(
          map((kablovi: Kabl[]) => ({
            type: '[kablovi component] save kablovi in store',
            kablovi: kablovi,
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _kabloviService: KabloviService
  ) {}
}