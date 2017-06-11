import { mainStoreReducer } from './state/main-reducer';
import { INCREMENT, DECREMENT, RESET } from './actions/actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state/state'; 
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'app works!';
    counter: Observable<number>;
    
    counterWorking: number;

    constructor(private store:Store<State>) {
        console.log('we have a store');

        //if counter is not an observable
        store.select('countReducer')
            .subscribe((data:State) => {
                this.counterWorking = data.counter; 
            });

        this.counter = store.select(store => {
            console.log('que cony es el que tinc al state: ', store['countReducer'].counter);    
            return store['countReducer'].counter;
        });
    }

    Increment() {
        console.log('entro al increment del counter');
        this.store.dispatch({type: INCREMENT});
    }

    Decrement() {
        this.store.dispatch({type: DECREMENT});
    }

    Reset() {
        this.store.dispatch({type: RESET});
    }
}
