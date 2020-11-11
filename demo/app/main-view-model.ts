import { Observable } from '@nativescript/core';
import { Raygun } from 'nativescript-raygun';

export class HelloWorldModel extends Observable {
    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }

    onTap() {
        this._counter--;
        this.updateMessage();

        Raygun.setUser("7ae0cda7-e6ce-4b9e-ab3f-4b0e9645d702", "steve@sitefinitysteve.com", "Steve McNiven-Scott", "Steve");
        Raygun.send("Test Error Message");
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message =
                'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
