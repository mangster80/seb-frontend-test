import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account_url = 'https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK';

  constructor(private http: HttpClient) {}

  getAccountData(): Observable<Account[]> {
    return this.http.get<Account[]>(this.account_url);
  }
}
