import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { dodajUKorpu, izbaciKablIzKorpe, isprazniKorpu } from '../actions/korpa.action';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import Kabl from 'src/app/models/kabl.model';

const adapter: EntityAdapter<Kabl> = createEntityAdapter<Kabl>();

export interface KorpaState extends EntityState<Kabl> {
    ids: number[];
    entities: { [id: number]: Kabl };
  }
  
  export const initialState: KorpaState = adapter.getInitialState({
    ids: [],
    entities: [],
  });

  const reducer = createReducer(
    initialState,
    on(dodajUKorpu, (state, { kabl }) => {
      return adapter.addOne(kabl, state);
    }),
    on(isprazniKorpu, (state) => {
      return adapter.removeAll(state);
    }),
    on(izbaciKablIzKorpe, (state, { id }) => {
      return adapter.removeOne(id, state);
    })
  );
  
  export function korpaReducer(state: KorpaState, action: Action) {
    return reducer(state, action);
  }