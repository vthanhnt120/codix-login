import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token$ = new BehaviorSubject<string | null>(null)
  constructor(private router: Router) { }
  syncToken() {
    const jwt = localStorage.getItem('jwt');
    this.token$.next(jwt);
  }
  setToken(token: string, remember = false) {
    if (remember) {
      localStorage.setItem('jwt', token);
    }
    this.token$.next(token)
  }
  getToken() {
    return this.token$.asObservable();
  }
  gotoLogin() {
    this.router.navigateByUrl('/auth/login');
  }
}
