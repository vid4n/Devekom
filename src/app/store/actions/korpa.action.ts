import Kabl from 'src/app/models/kabl.model';
import { createAction, props } from '@ngrx/store';

export const dodajUKorpu = createAction(
  '[kablovi component] add kabl to korpa',
  props<{ kabl: Kabl }>()
);

export const isprazniKorpu = createAction(
  '[korpa component, kablovi component]'
);

export const izbaciKablIzKorpe = createAction(
  '[korpa component]',
  props<{ id: number }>()
);  