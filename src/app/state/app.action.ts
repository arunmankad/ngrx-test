import {Action} from '@ngrx/store';


export const EDIT = '[APP] Edit toggle';


export class EditApp implements Action {
    readonly type = EDIT;
    constructor(public payload: boolean) {}
}

export type Actions = EditApp;
