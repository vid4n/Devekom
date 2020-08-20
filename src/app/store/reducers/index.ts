
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { KorpaState } from './korpa.reducer';
import { KabloviState } from './kablovi.reducer';

export const getKorpaState = createFeatureSelector('korpa');
export const getKabloviState = createFeatureSelector('kablovi');

export const getKabloveIzKorpe = createSelector(
    getKorpaState,
    (korpaState: KorpaState) => korpaState.entities
  );
  
  export const getKablovi = createSelector(
    getKabloviState,
    (kabloviState: KabloviState) => kabloviState.entities
  );
  
  export const getIds = createSelector(
    getKabloviState,
    (kabloviState: KabloviState) => kabloviState.kabloviIds
  );