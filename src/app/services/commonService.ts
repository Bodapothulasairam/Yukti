import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private isLoggedin = new BehaviorSubject<boolean>(false);
    private dataSubject = new BehaviorSubject<{ label: string, path: string }[]>([
    ]);
    data$ = this.dataSubject.asObservable();

    updateData(data: any[]): Observable<any> {
        this.dataSubject.next(data);
        return this.data$;
    }

    setLoggedIn(data: boolean): Observable<boolean> {
        this.isLoggedin.next(data);
        return this.isLoggedin;
    }
    getLoggedIn(): boolean {
        return this.isLoggedin.value;
    }
}