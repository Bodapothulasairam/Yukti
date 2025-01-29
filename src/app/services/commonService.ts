import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private isLoggedIn: boolean = false;
    private selectedButton: string = 'Home';

    constructor() { }

    getSelectedButton(): string {
        return this.selectedButton;
    }
    getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }

    setSelectedButton(value: string): void {
        this.selectedButton = value;
    }
    setIsLoggedIn(value: boolean): void {
        this.isLoggedIn = value;
    }
}