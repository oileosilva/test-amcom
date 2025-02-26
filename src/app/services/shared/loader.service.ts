import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    get isLoading$(): Observable<boolean> {
        return this._isLoading$.asObservable();
    }

    public startLoading(): void {
        this._isLoading$.next(true);
    }

    public stopLoading(): void {
        this._isLoading$.next(false);
    }

    public toggleLoading(): void {
        let toggle = !this._isLoading$.getValue();
        this._isLoading$.next(toggle);
    }
}
