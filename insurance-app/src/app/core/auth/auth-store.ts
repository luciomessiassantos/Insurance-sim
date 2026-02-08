import { computed, Injectable, signal } from '@angular/core';
import { User } from '../types/app';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _token = signal<string | undefined>(undefined);
  private _user = signal<User>({
    username: "Lucio",
    lastLoggedIn: new Date()
  })


  token = this._token.asReadonly();
  user = this._user.asReadonly();

  setToken(token: string) {
    this._token.set(token);
  }


  clearToken() {
    this._token.set(undefined);
  }

  // criar valor signal com memorização bool de validação de token

  isAuthenticated = computed(() => !!this._token());

}
