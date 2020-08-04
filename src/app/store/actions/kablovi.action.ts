import Kabl from 'src/app/models/kabl.model';
import { createAction, props } from '@ngrx/store';

export const sacuvajKablove = createAction(  //cuva sve kablove
    '[kablovi component] save kablovi in store', //[source] event
    props<{ kablovi: Kabl[] }>()
  );
  
  export const fetchKablovi = createAction(
    '[kablovi component] fetch kablovi',
    props<{ kablovi: Kabl[] }>()
  );
  
  export const fetchSveKablove = createAction(
    '[koaksijalni component] fetch sve kablove'
  );
  
  export const saveIds = createAction(  //cuva ID-jeve kablova odredjenog tipa
    '[kablovi component] save ids',
    props<{ kabloviIds: Number[] }>()
  );

  
//   export const saveMedicines = createAction(
//     '[pharmacies component] save medicines in store',
//     props<{ medicines: Medicine[] }>()
//   );
  
//   export const fetchMedicines = createAction(
//     '[medicines component] fetch medicines',
//     props<{ medicines: Medicine[] }>()
//   );
  
//   export const fetchAllMedicines = createAction(
//     '[medicines component] fetch all medicines'
//   );
  
//   export const saveIds = createAction(
//     '[medicines component] save ids',
//     props<{ medicinesIds: Number[] }>()
//   );
  