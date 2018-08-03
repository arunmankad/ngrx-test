import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';

export const LOAD_TUTORIAL = '[Tutorial] Load';
export const LOAD_TUTORIAL_SUCCESS = '[Tutorial] Load Success';
export const ADD_TUTORIAL = '[Tutorial] Add';
export const REMOVE_TUTORIAL = '[Tutorial] Remove';

export class LoadTutorial implements Action {
    readonly type = LOAD_TUTORIAL;
    // constructor(public payload: Tutorial) {}
}
export class LoadSuccess implements Action {
    readonly type = LOAD_TUTORIAL_SUCCESS;
    constructor(public payload: Tutorial[]) {}
}
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial | LoadTutorial | LoadSuccess;
