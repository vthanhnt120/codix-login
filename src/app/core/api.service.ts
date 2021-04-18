import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountModel } from './models/account-model';

@Injectable()
export class ApiService {

  constructor(protected http: HttpClient) { }

  login(account: Partial<AccountModel>) {
    return this.http.post<{
      jwt: string,
    }>(`${environment.api}/login`, account);
  }
  registration(account: (AccountModel & {password: string})) {
    return this.http.post<{
      jwt: string,
    }>(`${environment.api}/registration`, account);
  }
  getUserDetail() {
    return this.http.get<AccountModel>(`${environment.api}/account`);
  }
  updateUserDetail(account: string) {
    return this.http.post<AccountModel>(`${environment.api}/account`, account);
  }
}

@Injectable()
export class MockApiService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  login(_account: Partial<AccountModel>) {
    return of({jwt: '123'})
  }
  registration(_account: (AccountModel & {password: string})) {
    return of({jwt: '123'})
  }
  getUserDetail() {
    return of({
      name: 'thanh',
      email: 'thanh#gmail.com',
      phone: '09312345234',
  
    });
  }
  updateUserDetail(_account: string) {
    return of({
      name: 'thanh',
      email: 'thanh#gmail.com',
      phone: '09312345234',
  
    });
  }
}
