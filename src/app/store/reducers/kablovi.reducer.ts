//Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. 
//Reducer functions handle these transitions by determining which actions to handle based on the action's type.

import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import Kabl from 'src/app/models/kabl.model';
import { sacuvajKablove, saveIds } from '../actions/kablovi.action';

const adapter: EntityAdapter<Kabl> = createEntityAdapter<Kabl>();

export interface KabloviState extends EntityState<Kabl> {
    ids: number[];
    entities: { [id: number]: Kabl };
    kabloviIds: number[];
}

export const initialState: KabloviState = {
    ids: [],
    entities: [],
    kabloviIds: []
}

const reducer = createReducer (
    initialState,
    on(sacuvajKablove, (state, {kablovi}) => {
        return adapter.addAll(kablovi, state);
    }),
    on(saveIds, (state, { kabloviIds }) => {
        const newIds = kabloviIds;
        return { ...state, kabloviIds: newIds };
    })
);

export function kabloviReducer(state: KabloviState, action: Action) {
    return reducer(state, action);
}
