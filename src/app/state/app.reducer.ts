
import * as AppActions from './app.action';

export function reducer(state = {} , action: AppActions.Actions) {
    switch (action.type) {
        case AppActions.EDIT :
            return {...state,
                editApp: action.payload
            };
        default:
            return state;
    }
}

