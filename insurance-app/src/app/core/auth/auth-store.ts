import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _token = signal<string | undefined>(undefined);

  token = this._token.asReadonly();

  setToken(token: string) {
    this._token.set(token);
  }

  clearToken() {
    this._token.set(undefined);
  }

  // criar valor signal com memorização bool de validação de token

  isAuthenticated = computed(() => !!this._token());

}
