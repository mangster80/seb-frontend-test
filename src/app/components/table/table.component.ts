import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';
import { HttpLoaderService } from '../../services/http-loader.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  accountData: Account[] = [];

  constructor(public accountService: AccountService, public loaderService: HttpLoaderService) {}

  ngOnInit(): void {
    if (localStorage.getItem('account-data')) {
      this.accountData = JSON.parse(localStorage.getItem('account-data'));
    }
  }

  getAccountData() {
    this.accountService.getAccountData().subscribe(data => {
      this.accountData = data;
      console.table(data);
    });
  }
}
