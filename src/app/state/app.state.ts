import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppReducer from './app.reducer';
export interface AppState {
    readonly appState: {
        editApp: boolean
    };
}



// const getProductFeatureState = createFeatureSelector<fromAppReducer.AppState>('appState');

// export const getEditApp = createSelector(
//     getProductFeatureState,
//     state => state.editApp
// );
